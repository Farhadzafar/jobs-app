import { Separator } from "@radix-ui/react-separator";
import {
  Briefcase,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              <span className="text-lg md:text-xl font-bold">Mokran Jobs</span>
            </div>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Find your dream job and grow your career with Mokran Jobs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-sm md:text-base">
              For Job Seekers
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Career Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Resume Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Job Alerts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-sm md:text-base">
              For Employers
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/post-job"
                  className="text-gray-600 hover:text-primary"
                >
                  Post a Job
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Browse Candidates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Recruitment Solutions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-sm md:text-base">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-6 md:my-8" />
        <div className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Mokran Jobs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
