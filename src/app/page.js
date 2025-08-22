import Image from "next/image";
import Hero from "./components/Hero";
import ProductHighlights from "./components/ProductHighlights";
import ProductCarousel from "./components/ProductCarousel";
import FilterableProductSection from "./components/FilterableProductSection";

export default function Home() {
  return (
    <div>
    <Hero></Hero>
    <ProductHighlights></ProductHighlights>
    <FilterableProductSection></FilterableProductSection>
    <ProductCarousel></ProductCarousel>
    </div>
  );
}
