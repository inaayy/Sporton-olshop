import categories from "./components/home/categories";
import Categories from "./components/home/categories";
import HeroSection from "./components/home/hero";
import ProductsSection from "./components/home/products";
import { getAllCategories } from "../services/category.service";
import { getAllProducts } from "../services/product.service";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProducts()
  ]);

  return (
    <main>
      <HeroSection/>
      <Categories categories={categories}/>
      <ProductsSection products={products}/>
    </main>
  );
}