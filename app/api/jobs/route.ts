import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { waitForDebugger } from "inspector";

// ---------------- GET Method (Fetch All Jobs) ----------------
export async function GET(req: NextRequest) {
  try {
    const jobs = await prisma.job.findMany();

    return NextResponse.json(
      {
        status: 200,
        message: "Jobs fetched successfully",
        data: jobs,
      },
      { status: 200 } // HTTP status code
    );
  } catch (error) {
    console.error("Error fetching jobs:", error);

    return NextResponse.json(
      {
        status: 500,
        message: "Failed to fetch jobs",
        data: [],
      },
      { status: 500 } // HTTP status code
    );
  }
}

// ---------------- POST Method (Add New Job) ----------------
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // ✅ Basic validation — make sure required fields exist
    if (!body.title || !body.company || !body.type || !body.location) {
      return NextResponse.json(
        {
          status: 400,
          error: "Missing required fields: title, company, type, or location.",
        },
        { status: 400 }
      );
    }

    // ✅ Create a new job record in database
    const newJob = await prisma.job.create({
      data: {
        title: body.title,
        company: body.company,
        location: body.location,
        type: body.type,
        salary: body.salary || "Not specified",
        tags: body.tags || "General",
        description: body.description,
        companyInfo: body.companyInfo,
        logo: body.logo,
        closingDate: body.closingDate,
        companyEmail: body.companyEmail,
        companyWebsite: body.companyWebsite,
        experience: body.experience,
        jobApplyDescription: body.jobApplyDescription,
        remote: body.remote,
        startDate: body.startDate,
        companyLinks: body.companyLinks,
        team: body.team,
      },
    });

    // ✅ Success response
    return NextResponse.json(
      {
        status: 201,
        data: newJob,
        message: "🎉 Job created successfully!",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("🔥 Error creating job:", error);
    return NextResponse.json(
      {
        status: 500,
        error: "😭 Failed to create job!",
      },
      { status: 500 }
    );
  }
}
