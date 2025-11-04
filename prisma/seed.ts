import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.job.createMany({
    data: [
      {
        title: "Senior Frontend Developer",
        company: "TechCorp Solutions",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$120k - $160k",
        tags: "React,TypeScript,Next.js",
      },
      {
        title: "Backend Developer",
        company: "DataSoft",
        location: "New York, NY",
        type: "Full-time",
        salary: "$100k - $140k",
        tags: "Node.js,Express,PostgreSQL",
      },
      {
        title: "Fullstack Developer",
        company: "WebWorks",
        location: "Los Angeles, CA",
        type: "Contract",
        salary: "$90k - $130k",
        tags: "React,Node.js,GraphQL",
      },
      {
        title: "UI/UX Designer",
        company: "DesignPro",
        location: "Chicago, IL",
        type: "Full-time",
        salary: "$70k - $100k",
        tags: "Figma,Adobe XD,Sketch",
      },
      {
        title: "DevOps Engineer",
        company: "CloudNet",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$110k - $150k",
        tags: "AWS,Docker,Kubernetes",
      },
      {
        title: "Data Scientist",
        company: "AnalyticsHub",
        location: "Boston, MA",
        type: "Full-time",
        salary: "$120k - $160k",
        tags: "Python,Machine Learning,SQL",
      },
      {
        title: "Mobile App Developer",
        company: "Appify",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$90k - $130k",
        tags: "React Native,Flutter,Swift",
      },
      {
        title: "QA Engineer",
        company: "TestLab",
        location: "Denver, CO",
        type: "Contract",
        salary: "$60k - $90k",
        tags: "Selenium,Cypress,Java",
      },
      {
        title: "Product Manager",
        company: "InnovateX",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$130k - $170k",
        tags: "Agile,Scrum,Leadership",
      },
      {
        title: "Cloud Architect",
        company: "TechCloud",
        location: "New York, NY",
        type: "Full-time",
        salary: "$140k - $180k",
        tags: "AWS,Azure,Terraform",
      },
    ],
  });

  console.log("✅ 10 jobs added successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
