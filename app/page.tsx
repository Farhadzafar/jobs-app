import Hero from "@/components/features/home/hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getJobs } from "@/lib/jobs";
import { timeAgo } from "@/lib/utils";
import { ArrowRight, Building2, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <>
      <Hero />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          {jobs.map((job: any) => (
            <Link href={`/jobs/${job.id}`} key={job.id}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-18 h-18 rounded-lg object-cover object-center bg-primary/10 "
                    />
                    <div className="flex-1 w-full">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold mb-2">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 text-gray-600 text-sm md:text-base">
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
                        <Button
                          variant="secondary"
                          className="w-full sm:w-auto text-sm md:text-base"
                        >
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
                        <span className="text-green-600 font-semibold text-sm md:text-base">
                          {job.salary}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
