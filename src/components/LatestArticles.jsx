import { Calendar, User, Tag } from "lucide-react";
import { Button } from "./ui/button";
const LatestArticles = () => {
  const articles = Array(3).fill({
    title: "Many of those Products Offer the Potential",
    date: "10 June",
    author: "Admin",
    category: "Music",
  });

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Latest Articles & News</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <img 
                src={`https://images.unsplash.com/photo-${1610000000000 + index * 10000000}?w=500&h=350&fit=crop`}
                alt="Article"
                className="w-full h-56 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=500&h=350&fit=crop";
                }}
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>By {article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    <span>{article.category}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4 line-clamp-2">{article.title}</h4>
                <Button variant="outline" className="w-full">Read More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
