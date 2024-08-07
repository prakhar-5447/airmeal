import styles from "./page.module.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Statistics from "./components/Statistics";
import Features from "./components/Features";
import DownloadApp from "./components/DownloadApp";
import FAQs from "./components/FAQs";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Statistics />
      <Features />
      <VideoSection />
      <FAQs />
      <DownloadApp />
      <Footer />
    </div>
  );
}
