import Image from "next/image";
import HeroPage from "./hero/page";
import AboutPage from "./about/page";
import FeaturePage from "./feature/page";
import ProductPage from "./product/page";
import ProcessPage from "./process/page";
import BlogPage from "./blog/page";

export default function Home() {
  return (
   <div className="w-full h-auto overflow-hidden">
    <HeroPage/>
    <AboutPage/>
    <FeaturePage/>
    <ProductPage/>
    <ProcessPage/>
    <BlogPage/>
   </div>
  );
}
