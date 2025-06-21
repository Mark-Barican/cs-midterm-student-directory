import Link from 'next/link';
import { getStudentById } from '../../lib/data';
import { notFound } from 'next/navigation';

// Force dynamic rendering to prevent static generation
export const dynamic = 'force-dynamic';

export default async function StudentDetailPage({ params }) {
  const { id } = await params;
  const student = await getStudentById(id);

  if (!student) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* Navigation */}
        <nav className="mb-8 flex items-center space-x-4">
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Home
          </Link>
          <span className="text-gray-400">|</span>
          <Link 
            href="/students"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            All Students
          </Link>
        </nav>

        {/* Student Details Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white px-6 py-4">
            <h1 className="text-2xl font-bold">{student.name}</h1>
            <p className="text-blue-100">{student.course}</p>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Student Information</h2>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Student ID</label>
                    <p className="text-gray-900">#{student.id}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <p className="text-gray-900">{student.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <p className="text-gray-900">
                      <a href={`mailto:${student.email}`} className="text-blue-600 hover:text-blue-800">
                        {student.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Academic Information</h2>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Course</label>
                    <p className="text-gray-900">{student.course}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <p className="text-gray-900">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        Active Student
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/students"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center"
              >
                Back to All Students
              </Link>
              <a 
                href={`mailto:${student.email}`}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 