import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <div
      className="bg-cover bg-top bg-no-repeat pt-20 md:pt-24 mt-16"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.98)), url("https://images.pexels.com/photos/8640331/pexels-photo-8640331.jpeg?auto=format&fit=crop&w=1920&q=80")',
        minHeight: "500px",
      }}
      // style={{
      //   backgroundImage:
      //     'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/14011035/pexels-photo-14011035.jpeg?auto=format&fit=crop&w=1920&q=80")',
      //   minHeight: "500px",
      // }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
            Find Your Dream Job Today
          </h1>
          <p className="text-gray-200 mb-6 md:mb-8 text-base md:text-lg">
            Discover thousands of job opportunities with the best companies in
            the tech industry 🤗
          </p>

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 md:p-6">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Job title, keywords, or company"
                  className="pl-10"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="eu">Europe</SelectItem>
                  </SelectContent>
                </Select>
                <Button size="lg" className="w-full sm:flex-1">
                  Search Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
