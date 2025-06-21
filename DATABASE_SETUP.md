# Database Setup Guide

## PostgreSQL Integration with Neon Database

This project uses PostgreSQL via Neon Database with raw SQL queries using the `pg` library.

### Database Schema

```sql
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  course TEXT NOT NULL
);
```

### Environment Variables

Make sure your `.env.local` file contains the Neon database credentials:

```env
DATABASE_URL=postgres://neondb_owner:npg_J4lwTmfr0UVR@ep-nameless-art-a4bk52o7-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require
```

### Sample Data

The application automatically creates the table and inserts sample data when first accessed:

1. Alice Johnson - Computer Science
2. Bob Smith - Mathematics  
3. Carol Davis - Biology
4. David Wilson - Engineering
5. Emma Brown - Psychology
6. Frank Miller - Business Administration

### Routes

- `/` - Home page
- `/students` - List all students (with automatic DB initialization)
- `/students/[id]` - Individual student details

### Database Functions

Located in `src/app/lib/data.js`:

- `getAllStudents()` - Fetches all students ordered by name
- `getStudentById(id)` - Fetches a specific student by ID
- `createStudentsTable()` - Creates the students table if it doesn't exist
- `insertSampleData()` - Inserts sample data if table is empty
- `initializeDatabase()` - Runs table creation and data insertion

### Testing the Database

1. Start the development server: `npm run dev`
2. Visit `http://localhost:3000/students`
3. The database will be automatically initialized on first visit
4. Check the console for database connection messages

### Deployment Notes

- The routes are configured as dynamic (`export const dynamic = 'force-dynamic'`)
- This ensures database connections only happen at request time, not during build
- Environment variables must be configured in your Vercel deployment settings 