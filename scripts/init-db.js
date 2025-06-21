// Database initialization script
import { createStudentsTable, insertSampleData } from '../src/app/lib/data.js';

async function initializeDatabase() {
  try {
    console.log('🚀 Starting database initialization...');
    
    // Create the students table
    await createStudentsTable();
    console.log('✅ Students table created');
    
    // Insert sample data
    await insertSampleData();
    console.log('✅ Sample data inserted');
    
    console.log('🎉 Database initialization completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error initializing database:', error);
    process.exit(1);
  }
}

initializeDatabase(); 