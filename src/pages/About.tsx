import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Users, TrendingUp, Clock, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />

          <div className="container max-w-4xl mx-auto px-6 py-16 md:py-24 relative">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/5 rounded-full text-sm font-medium border border-foreground/10">
                <Heart className="w-4 h-4" />
                Our Story
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-8 leading-tight tracking-tight">
              We Understand the Struggle
            </h1>

            {/* Story Content */}
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
                The job market has never been tougher. In today's competitive landscape, 
                talented professionals spend months—sometimes even a year—searching for 
                their next opportunity.
              </p>

              <div className="bg-foreground/5 rounded-3xl p-8 md:p-12 border border-foreground/10">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6">
                  The Hidden Cost of Job Searching
                </h2>
                <p className="mb-6">
                  We've all been there. You find a dream job posting, get excited, and then 
                  reality sets in: your CV needs to be tailored, your cover letter must be 
                  compelling, and every application feels like starting from scratch.
                </p>
                <p className="mb-6">
                  The average job seeker spends <span className="text-foreground font-semibold">3-4 hours</span> customizing 
                  their application materials for a single position. Multiply that by dozens 
                  of applications, and you're looking at weeks of painstaking work—time that 
                  could be spent preparing for interviews or developing new skills.
                </p>
                <p>
                  The stress doesn't stop there. The anxiety of waiting, the fear of rejection, 
                  the endless cycle of hope and disappointment—it takes a real toll on mental 
                  health and confidence.
                </p>
              </div>

              <div className="text-center py-8">
                <Sparkles className="w-8 h-8 mx-auto text-foreground mb-4" />
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  That's Why We Built Job Hunt Master
                </h2>
                <p className="max-w-2xl mx-auto">
                  We created this tool with one mission: to free job seekers from the stress 
                  and anxiety of the application process. We believe your time and energy 
                  should be focused on what truly matters—preparing for your dream role, 
                  not wrestling with document formatting.
                </p>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
                <div className="bg-background border-2 border-foreground/10 rounded-2xl p-8 text-center">
                  <Users className="w-10 h-10 mx-auto text-foreground mb-4" />
                  <p className="text-4xl font-bold text-foreground mb-2">50,000+</p>
                  <p className="text-sm text-muted-foreground">Job Seekers Helped</p>
                </div>
                <div className="bg-background border-2 border-foreground/10 rounded-2xl p-8 text-center">
                  <TrendingUp className="w-10 h-10 mx-auto text-foreground mb-4" />
                  <p className="text-4xl font-bold text-foreground mb-2">97%</p>
                  <p className="text-sm text-muted-foreground">User Satisfaction Rate</p>
                </div>
                <div className="bg-background border-2 border-foreground/10 rounded-2xl p-8 text-center">
                  <Clock className="w-10 h-10 mx-auto text-foreground mb-4" />
                  <p className="text-4xl font-bold text-foreground mb-2">120,000+</p>
                  <p className="text-sm text-muted-foreground">Hours Saved</p>
                </div>
              </div>

              {/* Testimonial-style closing */}
              <div className="bg-foreground/5 rounded-3xl p-8 md:p-12 border border-foreground/10 text-center">
                <p className="text-lg md:text-xl italic text-foreground mb-6">
                  "Every person deserves the chance to present their best self to potential 
                  employers, without spending countless hours on paperwork."
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  — The Job Hunt Master Team
                </p>
              </div>

              {/* Call to Action */}
              <div className="text-center pt-8">
                <p className="text-lg text-foreground mb-6">
                  Ready to reclaim your time and reduce your job search stress?
                </p>
                <a
                  href="/"
                  className="inline-flex items-center gap-3 px-12 py-5 bg-foreground text-background rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-foreground/20"
                >
                  <Sparkles className="w-5 h-5" />
                  Start Creating Your CV
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
