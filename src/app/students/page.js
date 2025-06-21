import Link from 'next/link';
import { getAllStudents } from '../lib/data';

export default async function StudentsPage() {
  const students = await getAllStudents();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-8 px-4">
        {/* Navigation */}
        <nav className="mb-8">
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Home
          </Link>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Students Directory</h1>
          <p className="text-gray-600">View all registered students</p>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <div key={student.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{student.name}</h3>
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium">Major:</span> {student.major}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium">Year:</span> {student.year}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium">GPA:</span> {student.gpa}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">Email:</span> {student.email}
                  </p>
                </div>
                
                <Link 
                  href={`/students/${student.id}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center inline-block"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {students.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No students found.</p>
          </div>
        )}
      </div>
    </div>
  );
} 