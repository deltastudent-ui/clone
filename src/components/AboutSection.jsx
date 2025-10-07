import { Button } from "./ui/button";
import { Check } from "lucide-react";

const AboutSection = () => {
  const features = [
    "Non mattis nulla, in ultrices diam",
    "Web design done Delightful Visualization",
    "Alienum phaedrum torquatos nec eu, vis detraxit periculis",
    "Software Makes Your Profit Double if You Scale Properly",
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30 " style={{backgroundColor:"#212529" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div style={{color:"white"}}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              I'm a Social Media influencer & digital content creator
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. 
              Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris 
              bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum 
              libero, ac aliquet lectus.
            </p>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="bg-gradient-hero hover:opacity-90 transition-opacity"
            >
              Contact Me
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-muted/50 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground">Profile Image</p>
                  <img style={{width:"29rem"}} className="h-screen" src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
              </div>
            </div>
            {/* Decorative Vector */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
