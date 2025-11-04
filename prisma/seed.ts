// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.job.createMany({
    data: [
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        title: "Senior Frontend Developer",
        company: "TechCorp Solutions",
        type: "Full-time",
        salary: "$120k - $160k",
        tags: "React,TypeScript,Next.js,Frontend",
        description: `We are seeking a Senior Frontend Developer to join our dynamic team. The ideal candidate will have extensive experience in building modern web applications using React and TypeScript.

Key Responsibilities:
• Lead frontend development initiatives and mentor junior developers
• Architect and implement scalable frontend solutions
• Collaborate with designers and backend developers
• Optimize application performance and ensure high code quality

Requirements:
• 5+ years of experience in frontend development
• Expert knowledge of React, TypeScript, and modern JavaScript
• Experience with state management solutions (Redux, MobX, etc.)
• Strong understanding of web performance optimization
• Excellent problem-solving and communication skills`,
        companyInfo:
          "TechCorp Solutions is a global technology company focused on delivering cutting-edge web solutions to clients worldwide.",
        companyWebsite: "https://www.techcorp.com",
        companyEmail: "hr@techcorp.com",
        companyLinks: JSON.stringify({
          facebook: "https://facebook.com/techcorp",
          linkedin: "https://linkedin.com/company/techcorp",
          twitter: "https://twitter.com/techcorp",
        }),
        jobApplyDescription:
          "Please apply through our company website with your latest resume and portfolio.",
        team: "Our frontend team consists of passionate developers dedicated to creating pixel-perfect, responsive interfaces.",
        experience: "5+ years",
        startDate: new Date("2025-11-01"),
        closingDate: new Date("2025-12-15"),
        location: "San Francisco, CA",
        remote: true,
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        title: "Backend Engineer (Node.js)",
        company: "DataFlow Systems",
        type: "Full-time",
        salary: "$100k - $130k",
        tags: "Node.js,Express,PostgreSQL,API,Backend",
        description: `We are hiring a skilled Backend Engineer to design and implement robust server-side applications using Node.js and PostgreSQL.

Key Responsibilities:
• Develop and maintain scalable REST APIs
• Integrate external services and optimize data flows
• Collaborate closely with frontend and DevOps teams

Requirements:
• 3+ years of backend development experience
• Strong command of Node.js and Express
• Solid understanding of database design and query optimization
• Familiarity with cloud platforms (AWS, GCP)
• Team player with attention to detail`,
        companyInfo:
          "DataFlow Systems specializes in building scalable and data-intensive applications for enterprise clients.",
        companyWebsite: "https://dataflowsys.io",
        companyEmail: "jobs@dataflowsys.io",
        companyLinks: JSON.stringify({
          linkedin: "https://linkedin.com/company/dataflowsys",
          github: "https://github.com/dataflowsys",
        }),
        jobApplyDescription:
          "Submit your application through LinkedIn or via email with your GitHub profile link.",
        team: "A tight-knit group of engineers who love building clean APIs and efficient systems.",
        experience: "3+ years",
        startDate: new Date("2025-11-10"),
        closingDate: new Date("2025-12-20"),
        location: "Remote",
        remote: true,
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Tailwind_CSS_Logo.svg",
        title: "UI/UX Designer",
        company: "Creative Minds Studio",
        type: "Contract",
        salary: "$80k - $100k",
        tags: "UI/UX,Figma,AdobeXD,Design,Systems",
        description: `Creative Minds Studio is looking for a talented UI/UX Designer to craft beautiful and functional designs.

Key Responsibilities:
• Design user-centric interfaces
• Collaborate with developers to implement designs
• Conduct user research and usability testing

Requirements:
• 2+ years of experience in UI/UX design
• Proficiency with Figma and Adobe XD
• Understanding of responsive and accessible design principles`,
        companyInfo:
          "Creative Minds Studio is a digital design agency working with global startups and brands to craft unique experiences.",
        companyWebsite: "https://creativeminds.io",
        companyEmail: "design@creativeminds.io",
        companyLinks: JSON.stringify({
          dribbble: "https://dribbble.com/creativeminds",
          linkedin: "https://linkedin.com/company/creativeminds",
        }),
        jobApplyDescription:
          "Send your design portfolio and CV to design@creativeminds.io.",
        team: "Design team of innovative thinkers passionate about user experience and minimalism.",
        experience: "2+ years",
        startDate: new Date("2025-11-05"),
        closingDate: new Date("2025-11-30"),
        location: "Berlin, Germany",
        remote: false,
      },
    ],
  });
}

main()
  .then(() => console.log("✅ Mock jobs inserted successfully!"))
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
