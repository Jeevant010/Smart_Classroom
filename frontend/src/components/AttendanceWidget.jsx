import { useEffect, useState } from "react";

export default function AttendanceWidget() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/attendance/")
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData([]));
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Attendance</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="text-left">Student</th>
            <th className="text-left">Date</th>
            <th className="text-left">Present</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.student_name}</td>
              <td>{row.date}</td>
              <td>{row.present ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}