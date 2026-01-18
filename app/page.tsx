import Categories from "./(landing)/components/home/categories";
import HeroSection from "./(landing)/components/home/hero";
import ProductsSection from "./(landing)/components/home/products";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <Categories/>
      <ProductsSection/>
    </main>
  );
}