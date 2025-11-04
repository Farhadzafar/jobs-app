async function getJobs() {
  const response = await fetch("http://localhost:3000/api/jobs");
  if (!response.ok) throw new Error("Failed to fetch jobs");
  const res = await response.json(); // ✅ درست variable
  return res.data; // ✅ data array بیرته ورکول
}

// API ته غوښتنه
async function getJob(id: any) {
  const res = await fetch(`/api/jobs/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
}

export { getJobs, getJob };
