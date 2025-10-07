import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Brand Collaborations",
    "Empowering Creators",
    "Content Planner",
    "Relevant Content",
    "Social Media Management"
  ];

  const services = Array(5).fill({
    title: "Strategy Development",
    description: "consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.",
    features: [
      "Unlimited influencer search",
      "Unlimited direct messages with freelancer.",
      "Unlimited requests for with celebrities.",
      "Unlimited project tracking",
      "Unlimited Campaign monitoring.",
      "Goal Setting Begin by clearly defining"
    ]
  });

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Will I Give You?</h2>
          <Button variant="outline">View All Services</Button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === index
                  ? "bg-gradient-to-r from-primary to-secondary text-white"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={`https://images.unsplash.com/photo-${1600000000000 + index}?w=500&h=300&fit=crop`}
                alt="Service"
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=300&fit=crop";
                }}
              />
              <div className="p-6">
                <h5 className="text-xl font-bold mb-3">{service.title}</h5>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
