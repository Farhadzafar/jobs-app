import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

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
