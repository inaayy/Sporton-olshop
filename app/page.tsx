import categories from "./(landing)/components/home/categories";
import Categories from "./(landing)/components/home/categories";
import HeroSection from "./(landing)/components/home/hero";
import ProductsSection from "./(landing)/components/home/products";
import { getAllCategories } from "./services/category.service";

export default async function Home() {
  const categories = await getAllCategories();
  
  return (
    <main>
      <HeroSection/>
      <Categories categories={categories}/>
      <ProductsSection/>
    </main>
  );
}