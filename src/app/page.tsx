import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import ImgScroll from "./components/ImgScroll";
import Footer from "./components/Footer";
import PriceSection from "./components/PriceSection";
import ImgPreview from "./components/ImgPreview";

export default function Home() {
  return (
    <main>
      <Header/>
      <HeroSection/>
      <ImgScroll/>
      <PriceSection/>
      <Footer/>
    </main>
  );
}
