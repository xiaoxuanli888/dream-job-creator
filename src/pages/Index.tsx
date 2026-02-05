import { useState } from "react";
import FileUpload from "@/components/FileUpload";
import JobTypeSelector from "@/components/JobTypeSelector";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, FileText, Zap } from "lucide-react";
const Index = () => {
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [jobType, setJobType] = useState<"corporate" | "startup" | "open" | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const handleGenerate = () => {
    console.log("Generating CV and Cover Letter...", {
      cvFile,
      jobType,
      jobDescription
    });
  };
  return <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <main className="flex-1 pt-20 md:pt-24">
        {/* Hero with artistic elements */}
        <section className="relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-2 h-2 bg-foreground rounded-full" />
          <div className="absolute top-60 left-1/4 w-3 h-3 bg-foreground/30 rounded-full" />
          <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-foreground rounded-full" />

          <div className="container max-w-4xl mx-auto px-6 py-16 md:py-24 relative">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/5 rounded-full text-sm font-medium border border-foreground/10">
                <Sparkles className="w-4 h-4" />
                AI-Powered Career Tools
              </span>
            </div>

            {/* Hero Text */}
            <div className="text-center mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tight md:whitespace-nowrap">
              Your CV and Cover Letter Creator
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto line-clamp-2">
              Customize your CV and Cover Letter based on your experience and dream job. Upload your CV, paste the job description, and let us craft the perfect application.
            </p>
            </div>

            {/* Form Card */}
            <div className="bg-background border-2 border-foreground/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-foreground/5">
              <div className="space-y-10">
                {/* CV Upload - Centered */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-4">
                    <FileText className="w-4 h-4" />
                    Step 1
                  </div>
                  <div className="flex justify-center">
                    <FileUpload onFileSelect={setCvFile} />
                  </div>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-foreground/10" />
                  <span className="text-muted-foreground text-sm">then</span>
                  <div className="flex-1 h-px bg-foreground/10" />
                </div>

                {/* Job Type Selection */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-4">
                    <Zap className="w-4 h-4" />
                    Step 2
                  </div>
                  <p className="text-lg text-foreground mb-6 font-medium">
                    What type of role are you pursuing?
                  </p>
                  <JobTypeSelector selected={jobType} onSelect={setJobType} />
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-foreground/10" />
                  <span className="text-muted-foreground text-sm">and</span>
                  <div className="flex-1 h-px bg-foreground/10" />
                </div>

                {/* Job Description */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-4">
                    <FileText className="w-4 h-4" />
                    Step 3
                  </div>
                  <p className="text-lg text-foreground mb-4 font-medium">Paste the job description. Please include the role and the company name.</p>
                  <textarea value={jobDescription} onChange={e => setJobDescription(e.target.value)} placeholder="Copy and paste the full job description here..." className="w-full h-48 p-6 border-2 border-foreground/10 rounded-2xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/30 transition-colors resize-none text-sm leading-relaxed" />
                </div>

                {/* Generate Button */}
                <div className="flex justify-center pt-4">
                  <button onClick={handleGenerate} className="group relative px-12 py-5 bg-foreground text-background rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-foreground/20">
                    <span className="relative z-10 flex items-center gap-3">
                      <Sparkles className="w-5 h-5" />
                      Generate your CV and Cover Letter
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                Trusted by thousands of job seekers worldwide
              </p>
              <div className="flex justify-center gap-8 mt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">10k+</p>
                  <p className="text-xs text-muted-foreground">CVs Created</p>
                </div>
                <div className="w-px h-12 bg-foreground/10" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">95%</p>
                  <p className="text-xs text-muted-foreground">Success Rate</p>
                </div>
                <div className="w-px h-12 bg-foreground/10" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">24/7</p>
                  <p className="text-xs text-muted-foreground">Available</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Index;