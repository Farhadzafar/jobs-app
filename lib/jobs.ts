const BASE_URL = "http://localhost:3000/api";

// geting all jobs from api
async function getJobs() {
  const response = await fetch(`${BASE_URL}/jobs`);
  if (!response.ok) throw new Error("Failed to fetch jobs");
  const res = await response.json(); // ✅ درست variable
  return res.data; // ✅ data array بیرته ورکول
}

// getting a single job by id from api
async function getJob(id: any) {
  const res = await fetch(`${BASE_URL}/jobs/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
}

export { getJobs, getJob };
