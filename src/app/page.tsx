import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import ImgScroll from "./components/ImgScroll";
import Footer from "./components/Footer";
import PriceSection from "./components/PriceSection";
import DemoSection from "./components/DemoSection";
import CommentsSection from "./components/CommentsSection";

export default function Home() {
  return (
    <main>
      <Header/>
      <HeroSection/>
      <ImgScroll/>
      <DemoSection/>
      <PriceSection/>
      <CommentsSection/>
      <Footer/>
    </main>
  );
}
