import React from "react";

async function getJobs() {
  const response = await fetch("http://localhost:3000/api/jobs");
  if (!response.ok) throw new Error("Failed to fetch jobs");
  const res = await response.json(); // ✅ درست variable
  return res.data; // ✅ data array بیرته ورکول
}

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Jobs List
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job: any) => (
          <div
            key={job.id}
            className="border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {job.title}
            </h2>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Company:</span> {job.company}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Location:</span> {job.location}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Type:</span> {job.type}
            </p>
            <p className="text-gray-700 mb-1">
              <span className="font-medium">Salary:</span> {job.salary}
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-medium">Tags:</span>{" "}
              <span className="text-sm text-blue-600">{job.tags}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
