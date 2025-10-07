import "./App.css";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/Hero";
import LatestArticles from "./components/LatestArticles";
import PremiumVideos from "./components/PremiumVideos";
import ServicesSection from "./components/ServicesSection";

import SocialMediaCards from "./components/SocialMediaCards";
import UpcomingLives from "./components/UpcomingLives";
import VideoReels from "./components/VideoReels";
import Footer from "./components/footer";
function App() {
  return (
    <>
    <div  style={{ backgroundColor: "#c2edda" }}>
    <Header/>
    <HeroSection/>
             <SocialMediaCards/>
     <VideoReels/>

    <AboutSection/>

     <UpcomingLives/>
  
    <LatestArticles/>
    <PremiumVideos/>
    <ServicesSection/>
     <Footer/>
     </div>
</>
  );
}

export default App;
