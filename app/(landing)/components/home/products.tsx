"use client";
import Link from "next/dist/client/link";
import Image from "next/image";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";
import { Product } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";
import { useCartStore } from "@/app/hooks/use-cart-store";

type TProductsProps = {
  products: Product[];
};

const ProductsSection = ({products}: TProductsProps) => {
  const {addItem} = useCartStore();

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  }

  return (
    <section id="products-section" className="container mx-auto mt-32 mb-52">
      <h2 className="font-bold italic text-4xl text-center">
        <span className="text-primary"> OUR </span> PRODUCTS
      </h2>
      <div className="grid grid-cols-4 gap-5 mt-12">
        {products.map((product) => (
          <Link
            href={`/product/${product._id}`}
            key={product._id}
            className="p-1.5 bg-white hover:drop-shadow-xl duration-300"
          >
            <div className="bg-primary-light aspect-suqare w-full felx justify-center items-center relative">
              <Image
                src={getImageUrl(product.imageUrl)}
                alt={product.name}
                width={300}
                height={300}
                className="aspect-square"
                object-contain
              />
              <Button className="w-10 h-10 p-2! absolute right-3 top-3" onClick={(e) => handleAddToCart(e, product)}>
                <FiPlus size={24} />
              </Button>
            </div>
            <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
            <div className="flex justify-between mb-8">
              <div className="text-gray-500">{product.category.name}</div>
              <div className="front-medium text-primary">
                {Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumSignificantDigits: 3,
                }).format(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
