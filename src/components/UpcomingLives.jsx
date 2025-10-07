import { Button } from "./ui/button";
import { Facebook, Youtube } from "lucide-react";

const UpcomingLives = () => {
  const lives = [
    { platform: "Facebook", icon: Facebook, color: "#1877F2" },
    { platform: "Youtube", icon: Youtube, color: "#FF0000" },
  ];

  return (
    <section className="py-16 bg-background bg-#212529" style={{backgroundColor:"#212529" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center" style={{color:"white"}}>My Upcoming Lives</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"  >
          {lives.map((live, index) => {
            const IconComponent = live.icon;
            return (
              <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={`https://images.unsplash.com/photo-1637592156141-d41fb6234e71?q=80&w=1253&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                    alt="Live preview"
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1580983218765-e856f1c7e048?w=700&h=500&fit=crop";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2">
                    <IconComponent className="w-4 h-4" style={{ color: live.color }} />
                    <span className="text-sm font-medium">{live.platform} Live</span>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-xl font-bold mb-2" style={{color:"white"}}>Smiley woman pop party studio medium shot</h5>
                  <p className="text-sm text-muted-foreground mb-4" style={{color:"white"}}>25 Jun, 2024</p>
                  <p className="text-muted-foreground mb-6 line-clamp-3" style={{color:"white"}}>
                    consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white">
                    Book Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UpcomingLives;
