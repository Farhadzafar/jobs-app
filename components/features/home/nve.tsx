import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="bg-white border-b fixed w-full top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            <span className="text-lg md:text-xl font-bold">Mokran Jobs</span>
          </Link>
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link href="/post-job">
              <Button variant="ghost" className="text-sm md:text-base">
                Post a Job
              </Button>
            </Link>
            <Button className="text-sm md:text-base">Sign In</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
