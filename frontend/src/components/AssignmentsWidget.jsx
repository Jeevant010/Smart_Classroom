import { useEffect, useState } from "react";

export default function AssignmentsWidget() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/assignments/")
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData([]));
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Assignments</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="text-left">Title</th>
            <th className="text-left">Due Date</th>
            <th className="text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.title}</td>
              <td>{row.due_date}</td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}