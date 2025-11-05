const BASE_URL = "http://localhost:3000/api";

type FormData = {
  title: string;
  company: string;
  description: string;
  companyInfo: string;
  logo: string;
  type: string;
  salary: string;
  location: string;
  remote: boolean;
  tags: string;
  companyEmail: string;
  companyWebsite: string;
  companyLinks: string;
  team: string;
  experience: string;
  jobApplyDescription: string;
  startDate: string;
  closingDate: string;
};

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

// This function sends a POST request to add a new job
async function addingJob(jobData: any) {
  try {
    const response = await fetch(`${BASE_URL}/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobData),
    });

    const result = await response.json();
    console.log("✅ Job added successfully:", result);
    return result;
  } catch (error) {
    console.error("🔥 Error adding job:", error);
    alert("An error occurred while adding the job.");
  }
}

export { getJobs, getJob, addingJob };
