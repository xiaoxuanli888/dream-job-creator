import { useState } from "react";
import FileUpload from "@/components/FileUpload";
import JobTypeSelector from "@/components/JobTypeSelector";

const Index = () => {
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [jobType, setJobType] = useState<"corporate" | "startup" | null>(null);
  const [jobDescription, setJobDescription] = useState("");

  const handleGenerate = () => {
    console.log("Generating CV and Cover Letter...", {
      cvFile,
      jobType,
      jobDescription,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Your CV and Cover Letter Creator
          </h1>
          <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-2xl mx-auto">
            It helps you to customize the CV and Cover Letter based on your own CV and your dream job, all you need to do is to upload your own CV, paste the job description of your dream job and click the GENERATE button.
          </p>
        </div>

        {/* Form Section */}
        <div className="space-y-12">
          {/* CV Upload */}
          <div className="flex flex-col items-center">
            <FileUpload onFileSelect={setCvFile} />
          </div>

          {/* Job Type Selection */}
          <div className="text-center">
            <p className="text-lg text-foreground mb-6">
              Do you want to apply for a corporate job or a startup job?
            </p>
            <div className="flex justify-center">
              <JobTypeSelector selected={jobType} onSelect={setJobType} />
            </div>
          </div>

          {/* Job Description */}
          <div>
            <p className="text-lg text-foreground mb-4 text-center">
              You can copy and paste the job description here
            </p>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here..."
              className="w-full h-48 p-4 border-2 border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
            />
          </div>

          {/* Generate Button */}
          <div className="flex justify-center pt-4">
            <button
              onClick={handleGenerate}
              className="px-10 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Generate your CV and Cover Letter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
