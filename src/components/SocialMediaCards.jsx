import { Button } from "./ui/button";
import { Facebook, Instagram, Music2, Youtube } from "lucide-react";

const SocialMediaCards = () => {
  const socials = [
    { icon: Facebook, name: "Facebook", followers: "20.5K followers", color: "#1877F2" },
    { icon: Instagram, name: "Instagram", followers: "30.9K followers", color: "#E4405F" },
    { icon: Music2, name: "Tiktok", followers: "2.5M followers", color: "#000000" },
    { icon: Youtube, name: "YouTube", followers: "1.69M Sbscribers", color: "#FF0000" },
  ];

  return (
    <section className="py-16 bg-background bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socials.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${social.color}15` }}
                >
                  <IconComponent className="w-8 h-8" style={{ color: social.color }} />
                </div>
                <h5 className="text-xl font-bold mb-2">{social.name}</h5>
                <p className="text-muted-foreground mb-4">{social.followers}</p>
                <Button variant="outline" className="w-full">
                  {social.name === "YouTube" ? "Subscribe" : "Follow Me"}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaCards;
