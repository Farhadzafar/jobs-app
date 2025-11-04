"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getJob } from "@/lib/jobs";
import Link from "next/link";
import {
  ArrowLeft,
  Banknote,
  Building2,
  Clock,
  Globe,
  GraduationCap,
  MapPin,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { timeAgo } from "@/lib/utils";

export default function JobPage() {
  const { id } = useParams();
  const [job, setJob] = useState<any>(null);

  useEffect(() => {
    if (!id) return;
    getJob(id).then(setJob);
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <main className="container mx-auto px-4 pt-20 pb-8 md:pt-24 md:pb-12">
      <Link
        href="/"
        className="inline-flex items-center text-primary hover:text-primary/90 mb-4 md:mb-6 text-sm md:text-base"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Jobs
      </Link>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-20 h-20 md:w-20 md:h-20 rounded-lg object-cover bg-primary/10 "
                />
                <div>
                  <h1 className="text-xl md:text-2xl font-bold mb-2">
                    {job.title}
                  </h1>
                  <div className="flex flex-wrap gap-3 text-gray-600 text-sm md:text-base">
                    <span className="flex items-center gap-1">
                      <Building2 className="h-4 w-4" />
                      {job.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {timeAgo(job.createdAt)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <Globe className="h-5 w-5 text-gray-500" />
                  <div>
                    <div className="text-xs md:text-sm text-gray-500">Type</div>
                    <div className="font-medium text-sm md:text-base">
                      {job.type}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <Users className="h-7 w-7 text-gray-500" />
                  <div>
                    <div className="text-xs md:text-sm text-gray-500">Team</div>
                    <div className="font-medium text-sm md:text-base">
                      {job.team}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <Banknote className="h-5 w-5 text-gray-500" />
                  <div>
                    <div className="text-xs md:text-sm text-gray-500">
                      Salary
                    </div>
                    <div className="font-medium text-sm md:text-base">
                      {job.salary}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-gray-500" />
                  <div>
                    <div className="text-xs md:text-sm text-gray-500">
                      Experience
                    </div>
                    <div className="font-medium text-sm md:text-base">
                      {job.experience}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-lg md:text-xl font-semibold mb-3">
                    Required Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {job.tags?.split(",").map((tag: any) => (
                      <Badge
                        key={tag.trim()}
                        variant="secondary"
                        className="text-sm"
                      >
                        {tag.trim()}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h2 className="text-lg md:text-xl font-semibold mb-3">
                    Job Description
                  </h2>
                  <div className="prose max-w-none">
                    {job.description
                      .split("\n")
                      .map((paragraph: any, index: number) => (
                        <p
                          key={index}
                          className="mb-4 text-gray-600 text-sm md:text-base"
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>

                <Separator />

                {/* <div>
                  <h2 className="  text-lg md:text-xl font-semibold mb-3">
                    Benefits
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm md:text-base">
                    {job.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div> */}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="md:block">
          <Card className="md:sticky md:top-28">
            <CardContent className="p-4 md:p-6">
              <Button className="w-full mb-4 text-sm md:text-base">
                Apply Now
              </Button>
              <Button variant="outline" className="w-full text-sm md:text-base">
                Save Job
              </Button>

              <Separator className="my-6" />

              <h3 className="font-semibold mb-3 text-sm md:text-base">
                About {job.company}
              </h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                {job.companyInfo}
              </p>

              <div className="space-y-3">
                <a
                  href="#"
                  className="text-primary hover:underline block text-sm md:text-base"
                >
                  Visit Website
                </a>
                <a
                  href="#"
                  className="text-primary hover:underline block text-sm md:text-base"
                >
                  Follow on LinkedIn
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
