"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Briefcase, CheckCircle2, AlertCircle, Plus, X } from "lucide-react";
import { toast } from "sonner";
import { addingJob } from "@/lib/jobs";
// import { jobService } from "@/lib/supabase/client";

type FormData = {
  title: string;
  company: string;
  description: string;
  companyInfo: string;
  logo: string;
  type: string;
  salary: string;
  location: string;
  remote: boolean;
  tags: string;
  companyEmail: string;
  companyWebsite: string;
  companyLinks: string;
  team: string;
  experience: string;
  jobApplyDescription: string;
  startDate: string;
  closingDate: string;
};

export default function PostJobPage() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    company: "",
    description: "",
    companyInfo: "",
    logo: "",
    type: "Full-time",
    salary: "",
    location: "",
    remote: false,
    tags: "",
    companyEmail: "",
    companyWebsite: "",
    companyLinks: "",
    team: "",
    experience: "",
    jobApplyDescription: "",
    startDate: "",
    closingDate: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, type: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, remote: checked }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) newErrors.title = "Job title is required";
    if (!formData.company.trim())
      newErrors.company = "Company name is required";
    if (!formData.description.trim())
      newErrors.description = "Job description is required";
    if (!formData.companyInfo.trim())
      newErrors.companyInfo = "Company info is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.companyEmail.trim())
      newErrors.companyEmail = "Company email is required";
    if (!formData.closingDate)
      newErrors.closingDate = "Closing date is required";

    const closingDate = new Date(formData.closingDate);
    if (closingDate < new Date()) {
      newErrors.closingDate = "Closing date must be in the future";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form", {
        duration: 4000,
        position: "top-center",
        style: {
          border: "1px solid #f87171",
          background: "#fee2e2",
          color: "#b91c1c",
          fontWeight: "bold",
          borderRadius: "5px",
          padding: "16px",
        },
        icon: "😣",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const startDate = formData.startDate
        ? new Date(formData.startDate)
        : null;
      const closingDate = new Date(formData.closingDate);

      const jobData = {
        title: formData.title,
        company: formData.company,
        description: formData.description,
        companyInfo: formData.companyInfo,
        logo: formData.logo || null,
        type: formData.type,
        salary: formData.salary || null,
        location: formData.location,
        remote: formData.remote,
        tags: formData.tags || null,
        companyEmail: formData.companyEmail,
        companyWebsite: formData.companyWebsite || null,
        companyLinks: formData.companyLinks || null,
        team: formData.team || null,
        experience: formData.experience || null,
        jobApplyDescription:
          formData.jobApplyDescription ||
          "Email your application materials to us.",
        startDate: startDate,
        closingDate: closingDate,
      };

      const result = await addingJob(jobData);
      setIsSubmitted(true);
      toast.success(result.message, {
        description: "Your job posting is now live.",
        duration: 4000,
        position: "top-center",
        style: {
          border: "1px solid #f87171",
          background: "#fee2e2",
          color: "#b91c1c",
          fontWeight: "bold",
          borderRadius: "5px",
          padding: "16px",
        },
      });
    } catch (error) {
      console.error("Error posting job:", error);
      toast.error("Failed to post job", {
        description: "Please try again later.",
        duration: 4000,
        position: "top-center",
        style: {
          border: "1px solid #f87171",
          background: "#fee2e2",
          color: "#b91c1c",
          fontWeight: "bold",
          borderRadius: "5px",
          padding: "16px",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className=" w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4 ">
        <Card className="w-full max-w-md border-0 shadow-xl">
          <CardContent className="pt-12 pb-12 text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Job Posted!
            </h2>
            <p className="text-slate-600 mb-8">
              Your job posting has been successfully published and is now live
              for applicants.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  title: "",
                  company: "",
                  description: "",
                  companyInfo: "",
                  logo: "",
                  type: "Full-time",
                  salary: "",
                  location: "",
                  remote: false,
                  tags: "",
                  companyEmail: "",
                  companyWebsite: "",
                  companyLinks: "",
                  team: "",
                  experience: "",
                  jobApplyDescription: "",
                  startDate: "",
                  closingDate: "",
                });
              }}
              className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700"
            >
              Post Another Job
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-4 py-12 max-w-4xl mt-20">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">Post a Job</h1>
          </div>
          <p className="text-lg text-slate-600">
            Create and publish a job opening to attract qualified candidates
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary via-green-500 to-red-500" />
            <CardHeader>
              <CardTitle className="text-2xl">Job Details</CardTitle>
              <CardDescription>
                Basic information about the position
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-sm font-semibold">
                    Job Title *
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Senior React Developer"
                    className={errors.title ? "border-red-500" : ""}
                  />
                  {errors.title && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.title}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-semibold">
                    Company Name *
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g., Acme Corp"
                    className={errors.company ? "border-red-500" : ""}
                  />
                  {errors.company && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.company}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="type" className="text-sm font-semibold">
                    Job Type
                  </Label>
                  <Select
                    value={formData.type}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger id="type">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Temporary">Temporary</SelectItem>
                      <SelectItem value="Internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="salary" className="text-sm font-semibold">
                    Salary Range
                  </Label>
                  <Input
                    id="salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    placeholder="e.g., $70k - $100k"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm font-semibold">
                    Location *
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g., San Francisco, CA"
                    className={errors.location ? "border-red-500" : ""}
                  />
                  {errors.location && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.location}
                    </p>
                  )}
                </div>

                <div className="flex items-end">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 w-full">
                    <Checkbox
                      id="remote"
                      checked={formData.remote}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <Label
                      htmlFor="remote"
                      className="cursor-pointer font-medium"
                    >
                      Remote Position
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags" className="text-sm font-semibold">
                  Skills/Tags (comma-separated)
                </Label>
                <Input
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="e.g., React, TypeScript, Node.js, AWS"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="logo" className="text-sm font-semibold">
                  Company Logo URL
                </Label>
                <Input
                  id="logo"
                  name="logo"
                  type="url"
                  value={formData.logo}
                  onChange={handleInputChange}
                  placeholder="https://example.com/logo.png"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-semibold">
                  Job Description *
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe the role, responsibilities, and requirements..."
                  rows={8}
                  className={`resize-none ${
                    errors.description ? "border-red-500" : ""
                  }`}
                />
                {errors.description && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.description}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500" />
            <CardHeader>
              <CardTitle className="text-2xl">Company Information</CardTitle>
              <CardDescription>Details about your company</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="companyInfo" className="text-sm font-semibold">
                  About Your Company *
                </Label>
                <Textarea
                  id="companyInfo"
                  name="companyInfo"
                  value={formData.companyInfo}
                  onChange={handleInputChange}
                  placeholder="Tell candidates about your company..."
                  rows={4}
                  className={errors.companyInfo ? "border-red-500" : ""}
                />
                {errors.companyInfo && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.companyInfo}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="companyEmail"
                    className="text-sm font-semibold"
                  >
                    Contact Email *
                  </Label>
                  <Input
                    id="companyEmail"
                    name="companyEmail"
                    type="email"
                    value={formData.companyEmail}
                    onChange={handleInputChange}
                    placeholder="careers@company.com"
                    className={errors.companyEmail ? "border-red-500" : ""}
                  />
                  {errors.companyEmail && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.companyEmail}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="companyWebsite"
                    className="text-sm font-semibold"
                  >
                    Website
                  </Label>
                  <Input
                    id="companyWebsite"
                    name="companyWebsite"
                    type="url"
                    value={formData.companyWebsite}
                    onChange={handleInputChange}
                    placeholder="https://company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="team" className="text-sm font-semibold">
                  Team Description
                </Label>
                <Textarea
                  id="team"
                  name="team"
                  value={formData.team}
                  onChange={handleInputChange}
                  placeholder="Describe the team the candidate will be joining..."
                  rows={3}
                  className="resize-none"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-semibold">
                  Social Media Links
                </Label>
                <div className="space-y-3">
                  <Input
                    name="companyLinks"
                    value={formData.companyLinks}
                    onChange={handleInputChange}
                    placeholder="Facebook URL, Linkedln URL, Twitter URL"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" />
            <CardHeader>
              <CardTitle className="text-2xl">Requirements & Dates</CardTitle>
              <CardDescription>
                Set job requirements and application deadline
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-sm font-semibold">
                    Required Experience
                  </Label>
                  <Input
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="e.g., 3+ years"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="startDate" className="text-sm font-semibold">
                    Start Date
                  </Label>
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="closingDate" className="text-sm font-semibold">
                  Application Closing Date *
                </Label>
                <Input
                  id="closingDate"
                  name="closingDate"
                  type="date"
                  value={formData.closingDate}
                  onChange={handleInputChange}
                  className={errors.closingDate ? "border-red-500" : ""}
                />
                {errors.closingDate && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.closingDate}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="jobApplyDescription"
                  className="text-sm font-semibold"
                >
                  Application Instructions
                </Label>
                <Textarea
                  id="jobApplyDescription"
                  name="jobApplyDescription"
                  value={formData.jobApplyDescription}
                  onChange={handleInputChange}
                  placeholder="e.g., Email your resume and portfolio to us."
                  rows={3}
                  className="resize-none"
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 h-12 text-base font-semibold bg-gradient-to-r  from-cyan-500 via-primary to-teal-500 hover:from-orange-600 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Publishing...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Publish Job
                </span>
              )}
            </Button>
            <Button
              type="reset"
              variant="outline"
              className="px-8 h-12 text-base font-semibold"
            >
              Clear
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
