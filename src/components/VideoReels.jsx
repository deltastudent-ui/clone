import { Facebook, Play } from "lucide-react";

const VideoReels = () => {
  const reels = Array(8).fill({
    title: "Can Robot Solve This ...?",
    views: "16M views",
  });

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Latest Video Reels</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 p-3 m-10 ">
          {reels.map((reel, index) => (
            <div key={index} className="group relative">
              <div className="aspect-[9/16] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden relative ">
                <img 
                  src={`https://images.unsplash.com/photo-${1550000000000 + index}?w=400&h=700&fit=crop` }
                  alt="Reel thumbnail"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=700&fit=crop`;
                  }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary fill-primary ml-1" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Facebook className="w-3 h-3 text-blue-600" />
                  <span className="text-xs font-medium">Facebook Reel</span>
                </div>
              </div>
              <h5 className="font-semibold mt-3 mb-1 line-clamp-2">{reel.title}</h5>
              <p className="text-sm text-muted-foreground">{reel.views}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoReels;
