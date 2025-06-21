# Student Directory - Next.js Application

A comprehensive student management system built with Next.js 15, demonstrating proper routing, data fetching, and PostgreSQL integration concepts.

## Features

- **Homepage** (`/`) - Welcome page with navigation and application overview
- **Students List** (`/students`) - Displays all students in a responsive grid layout
- **Student Details** (`/students/[id]`) - Dynamic route showing individual student information
- **Responsive Design** - Built with Tailwind CSS for mobile-first experience
- **PostgreSQL Ready** - Includes setup for real database integration

## Pages and Routing

### Static Routes
- `/` - Homepage with title and navigation
- `/students` - Students list page

### Dynamic Routes
- `/students/[id]` - Individual student detail pages

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React version
- **Tailwind CSS** - Utility-first CSS framework
- **PostgreSQL** - Database integration (pg library installed)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Application Structure

```
src/app/
├── layout.js          # Root layout
├── page.js            # Homepage (/)
├── students/
│   ├── page.js        # Students list (/students)
│   └── [id]/
│       └── page.js    # Student details (/students/[id])
├── lib/
│   └── data.js        # Data utilities and mock data
└── globals.css        # Global styles
```

## Data Management

Currently uses mock data for demonstration. The application includes:
- 6 sample students with complete information
- Async data fetching simulation
- PostgreSQL integration setup (commented out)

### Sample Students
1. Alice Johnson - Computer Science Sophomore
2. Bob Smith - Mathematics Senior  
3. Carol Davis - Biology Freshman
4. David Wilson - Engineering Junior
5. Emma Brown - Psychology Sophomore
6. Frank Miller - Business Administration Senior

## PostgreSQL Integration

The app is ready for PostgreSQL integration. To connect to a real database:

1. **Set up environment variables:**
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=student_directory
   DB_USER=postgres
   DB_PASSWORD=your_password
   ```

2. **Uncomment PostgreSQL code in `src/app/lib/data.js`**

3. **Create the students table:**
   ```sql
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
   ```

## Navigation Flow

1. **Start at Homepage** - Overview and navigation options
2. **Browse Students** - Click "View All Students" to see the list
3. **View Details** - Click "View Details" on any student card
4. **Navigate Back** - Use breadcrumb navigation to return

## Styling Features

- Clean, modern design with gray and blue color scheme
- Responsive grid layouts for different screen sizes
- Hover effects and smooth transitions
- Color-coded GPA indicators (green/yellow/red)
- Professional card-based layouts

## Development Commands

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Key Learning Concepts Demonstrated

1. **Next.js App Router** - Modern file-based routing
2. **Static vs Dynamic Routes** - Different routing patterns
3. **Server Components** - Async data fetching in components
4. **Database Integration** - PostgreSQL setup and queries
5. **Responsive Design** - Mobile-first CSS with Tailwind
6. **TypeScript Ready** - Project structure supports TypeScript migration

## Future Enhancements

- Add search and filtering functionality
- Implement CRUD operations (Create, Update, Delete)
- Add authentication and authorization
- Include student photo uploads
- Add pagination for large student lists
- Implement real-time updates with WebSockets

---

**Note:** This application demonstrates core Next.js concepts and is ready for production use with real PostgreSQL database integration.
