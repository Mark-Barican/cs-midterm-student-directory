import { Client } from 'pg';

// Database connection configuration
let client = null;
let isConnected = false;

function createClient() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set');
  }
  
  return new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
}

// Initialize database connection
async function connectToDatabase() {
  if (!isConnected) {
    try {
      if (!client) {
        client = createClient();
      }
      await client.connect();
      isConnected = true;
      console.log('Connected to PostgreSQL database');
    } catch (error) {
      console.error('Error connecting to database:', error);
      throw error;
    }
  }
}

// Create students table if it doesn't exist
export async function createStudentsTable() {
  await connectToDatabase();
  
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS students (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      course TEXT NOT NULL
    );
  `;
  
  try {
    await client.query(createTableQuery);
    console.log('Students table created or already exists');
  } catch (error) {
    console.error('Error creating students table:', error);
    throw error;
  }
}

// Insert sample data
export async function insertSampleData() {
  await connectToDatabase();
  
  // First check if data already exists
  const checkQuery = 'SELECT COUNT(*) FROM students';
  const result = await client.query(checkQuery);
  
  if (parseInt(result.rows[0].count) > 0) {
    console.log('Sample data already exists');
    return;
  }
  
  const insertQuery = `
    INSERT INTO students (name, email, course) VALUES
    ('Alice Johnson', 'alice.johnson@university.edu', 'Computer Science'),
    ('Bob Smith', 'bob.smith@university.edu', 'Mathematics'),
    ('Carol Davis', 'carol.davis@university.edu', 'Biology'),
    ('David Wilson', 'david.wilson@university.edu', 'Engineering'),
    ('Emma Brown', 'emma.brown@university.edu', 'Psychology'),
    ('Frank Miller', 'frank.miller@university.edu', 'Business Administration')
  `;
  
  try {
    await client.query(insertQuery);
    console.log('Sample data inserted successfully');
  } catch (error) {
    console.error('Error inserting sample data:', error);
    throw error;
  }
}

// Get all students
export async function getAllStudents() {
  await connectToDatabase();
  
  const query = 'SELECT * FROM students ORDER BY name';
  
  try {
    const result = await client.query(query);
    return result.rows;
  } catch (error) {
    console.error('Error fetching all students:', error);
    throw error;
  }
}

// Get student by ID
export async function getStudentById(id) {
  await connectToDatabase();
  
  const query = 'SELECT * FROM students WHERE id = $1';
  
  try {
    const result = await client.query(query, [id]);
    return result.rows[0] || null;
  } catch (error) {
    console.error('Error fetching student by ID:', error);
    throw error;
  }
}

// Initialize database (create table and insert sample data)
export async function initializeDatabase() {
  try {
    await createStudentsTable();
    await insertSampleData();
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}

// Example PostgreSQL connection setup (commented out for demo)
/*
import { Client } from 'pg';

const client = new Client({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'student_directory',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
});

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL database');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}

// Example table creation SQL:
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  age INTEGER,
  major VARCHAR(100),
  year VARCHAR(50),
  gpa DECIMAL(3,2),
  phone VARCHAR(20),
  address TEXT
);
*/ 