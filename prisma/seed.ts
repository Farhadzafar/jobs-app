// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.job.createMany({
    data: [
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
        title: "CSS/Sass Developer",
        company: "StyleWorks",
        type: "Contract",
        salary: "$70k - $100k",
        tags: "CSS,Sass,Frontend,Design,Systems",
        description: `We are looking for a CSS/Sass Developer to create responsive and visually appealing web designs.
Responsibilities:
• Develop and maintain CSS/Sass codebases
• Collaborate with designers and developers
• Ensure cross-browser compatibility
• Optimize styles for performance   
Requirements:
• 3+ years experience with CSS and Sass
• Strong understanding of responsive design
• Experience with design systems
• Attention to detail and creativity`,

        companyInfo:
          "StyleWorks is a design-focused agency delivering top-notch web experiences.",
        companyWebsite: "https://www.styleworks.com",
        companyEmail: "exmple@gmail.com",
        companyLinks: JSON.stringify({
          facebook: "https://facebook.com/styleworks",
          linkedin: "https://linkedin.com/company/styleworks",
          twitter: "https://twitter.com/styleworks",
        }),
        jobApplyDescription: "Email your resume and portfolio to us.",
        team: "Creative team focused on design and user experience.",
        experience: "3+ years",
        startDate: new Date("2025-11-20"),
        closingDate: new Date("2025-12-31"),
        location: "Los Angeles, CA",
        remote: false,
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
        title: "C# Developer",
        company: "CodeCrafters",
        type: "Full-time",
        salary: "$90k - $130k",
        tags: "C#,Backend,.NET,APIs,Microservices",
        description: `We are seeking a skilled C# Developer to build robust backend systems and APIs.
Responsibilities:
• Design and implement backend services using C#
• Collaborate with frontend developers
• Write clean, maintainable code
• Participate in code reviews   
Requirements:
• 4+ years experience with C# and .NET
• Strong understanding of RESTful APIs
• Experience with microservices architecture
• Problem-solving skills`,
        companyInfo:
          "CodeCrafters is a software development firm specializing in custom solutions.",
        companyWebsite: "https://www.codecrafters.com",
        companyEmail: "test@gima.com",
        companyLinks: JSON.stringify({
          facebook: "https://facebook.com/codecrafters",
          linkedin: "https://linkedin.com/company/codecrafters",
          twitter: "https://twitter.com/codecrafters",
        }),
        jobApplyDescription:
          "Submit your application through our careers page.",
        team: "Backend development team focused on scalable solutions.",
        experience: "4+ years",
        startDate: new Date("2025-10-15"),
        closingDate: new Date("2025-11-30"),
        location: "Seattle, WA",
        remote: true,
      },
      {
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
        title: "C++ Developer",
        company: "TechSolutions",
        type: "Part-time",
        salary: "$80k - $120k",
        tags: "C++,Systems,Performance,Embedded,Algorithms",
        description: `We are looking for a C++ Developer to work on high-performance applications and systems.
Responsibilities:
• Develop and optimize C++ applications
• Collaborate with cross-functional teams
• Write efficient and maintainable code
• Conduct performance testing
Requirements:
• 5+ years experience with C++
• Strong understanding of algorithms and data structures
• Experience with embedded systems is a plus
• Ability to work in a fast-paced environment`,
        companyInfo:
          "TechSolutions provides cutting-edge technology solutions for various industries.",
        companyWebsite: "https://www.techsolutions.com",
        companyEmail: "test@gmail.com",
        companyLinks: JSON.stringify({
          facebook: "https://facebook.com/techsolutions",
          linkedin: "https://linkedin.com/company/techsolutions",
          twitter: "https://twitter.com/techsolutions",
        }),
        jobApplyDescription:
          "Apply online through our job portal with your resume.",
        team: "Systems development team focused on performance and reliability.",
        experience: "5+ years",
        startDate: new Date("2025-09-01"),
        closingDate: new Date("2025-10-15"),
        location: "Austin, TX",
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
