import Link from "next/dist/client/link";
import Image from "next/image";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";

const productList = [
  {
    name: "SportOn Product 1",
    category: "Running",
    price: 450000,
    imgUrl: "sport-shirt.svg",
  },
  {
    name: "SportOn Product 2",
    category: "Running",
    price: 250000,
    imgUrl: "sport-shirt-1.svg",
  },
  {
    name: "SportOn Product 3",
    category: "Running",
    price: 220000,
    imgUrl: "sepatu.svg",
  },
  {
    name: "SportOn Product 4",
    category: "Running",
    price: 460000,
    imgUrl: "sepatu-1.svg",
  },
  {
    name: "SportOn Product 5",
    category: "Running",
    price: 550000,
    imgUrl: "tennis.svg",
  },
  {
    name: "SportOn Product 6",
    category: "Running",
    price: 600000,
    imgUrl: "basketball.svg",
  },
];

const ProductsSection = () => {
  return (
    <section id="products-section" className="container mx-auto mt-32 mb-52">
      <h2 className="font-bold italic text-4xl text-center">
        <span className="text-primary"> OUR </span> PRODUCTS
      </h2>
      <div className="grid grid-cols-4 gap-5 mt-12">
        {productList.map((product, index) => (
          // <div className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center"
          // key={index}></div>
          <Link
            href={`/product/${product.name}`}
            key={index}
            className="p-1.5 bg-white hover:drop-shadow-xl duration-300"
          >
            <div className="bg-primary-light aspect-suqare w-full felx justify-center items-center relative">
              <Image
                src={`/images/products/${product.imgUrl}`}
                alt={product.name}
                width={300}
                height={300}
                className="aspect-square"
                object-contain
              />
              <Button className="w-10 h-10 p-2! absolute right-3 top-3">
                <FiPlus size={24} />
              </Button>
            </div>
            <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
            <div className="flex justify-between mb-8">
              <div className="text-gray-500">{product.category}</div>
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
