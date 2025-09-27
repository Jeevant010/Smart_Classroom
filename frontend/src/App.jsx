import AttendanceWidget from "./components/AttendanceWidget";
import AssignmentsWidget from "./components/AssignmentsWidget";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-blue-800 text-white py-4 px-8 flex items-center">
        <h1 className="text-2xl font-bold">Smart Classroom Dashboard</h1>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 bg-blue-900 text-white p-6">
          <nav>
            <ul>
              <li className="mb-4 font-semibold">Attendance</li>
              <li className="mb-4 font-semibold">Assignments</li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <AttendanceWidget />
          <AssignmentsWidget />
        </main>
      </div>
    </div>
  );
}