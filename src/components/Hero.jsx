import { Button } from "./ui/button";
import linda from './linda-removebg-preview.png';
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-16 lg:pt-20 bg-green-400">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-black ">
            <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium">✨ Beauty & Lifestyle Influencer</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              I'm{" "}
              <span className="relative inline-block">
                Linda Susan
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 15C50 8 100 5 150 8C200 11 250 14 298 10"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-8 text-white/90 font-light">
              Beauty & Lifestyle Influencer
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
              >
                About Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative ">
            <div className="relative z-10" >
              <img style={{height:"30rem"}}
                src={`${linda}`}
                alt="Linda Susan - Beauty & Lifestyle Influencer"
                className="w-full h- rounded-3xl shadow-2xl"
              />
              
              {/* Follower Badge */}
              <div className="absolute top-8 right-8 bg-white rounded-full px-6 py-4 shadow-float">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">74K</div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </div>
              </div>
            </div>

            {/* Floating Notifications */}
            {/* <FloatingNotification position="top-left" />
            <FloatingNotification position="bottom-right" /> */}
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path 
            d="M0 50C240 20 480 0 720 10C960 20 1200 40 1440 50V100H0V50Z"
            fill="bg-green-400"
          />
            
        
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
