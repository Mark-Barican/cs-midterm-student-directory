// Mock student data - In a real application, this would come from PostgreSQL
const mockStudents = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice.johnson@university.edu',
    age: 20,
    major: 'Computer Science',
    year: 'Sophomore',
    gpa: 3.8,
    phone: '555-0101',
    address: '123 Campus Drive, University City, UC 12345'
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob.smith@university.edu',
    age: 22,
    major: 'Mathematics',
    year: 'Senior',
    gpa: 3.6,
    phone: '555-0102',
    address: '456 College Ave, University City, UC 12345'
  },
  {
    id: '3',
    name: 'Carol Davis',
    email: 'carol.davis@university.edu',
    age: 19,
    major: 'Biology',
    year: 'Freshman',
    gpa: 3.9,
    phone: '555-0103',
    address: '789 Student Lane, University City, UC 12345'
  },
  {
    id: '4',
    name: 'David Wilson',
    email: 'david.wilson@university.edu',
    age: 21,
    major: 'Engineering',
    year: 'Junior',
    gpa: 3.7,
    phone: '555-0104',
    address: '321 Academic St, University City, UC 12345'
  },
  {
    id: '5',
    name: 'Emma Brown',
    email: 'emma.brown@university.edu',
    age: 20,
    major: 'Psychology',
    year: 'Sophomore',
    gpa: 3.5,
    phone: '555-0105',
    address: '654 Learning Blvd, University City, UC 12345'
  },
  {
    id: '6',
    name: 'Frank Miller',
    email: 'frank.miller@university.edu',
    age: 23,
    major: 'Business Administration',
    year: 'Senior',
    gpa: 3.4,
    phone: '555-0106',
    address: '987 Education Way, University City, UC 12345'
  }
];

// Simulate database operations
export async function getAllStudents() {
  // In a real application, this would be a PostgreSQL query:
  // const result = await client.query('SELECT * FROM students ORDER BY name');
  // return result.rows;
  
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockStudents;
}

export async function getStudentById(id) {
  // In a real application, this would be a PostgreSQL query:
  // const result = await client.query('SELECT * FROM students WHERE id = $1', [id]);
  // return result.rows[0];
  
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockStudents.find(student => student.id === id);
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