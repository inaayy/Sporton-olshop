"use client";
import Button from "../ui/button";
import { FiArrowRight, FiChevronDown, FiChevronUp, FiShoppingBag } from "react-icons/fi";
import { useState } from "react";
import { useRouter } from "next/navigation";

type TProductActionProps = {
  stock: number;
}

const ProductActions = ({stock}:TProductActionProps) => {
  const { push } = useRouter();
  const [qty, setQty] = useState(1);

  const chechkout = () => {};
  return (
    <div className="flex gap-5">
      <div className="border border-gray-300 inline-flex w-fit min-w-20.5">
        <div className="aspect-square text-xl font-medium border-r border-gray-300 flex justify-center items-center">
          <span>{qty}</span>
        </div>
        <div className="flex flex-col">
          <button
            className="border-b border-gray-300 cursor-pointer h-1/2 aspect-square flex items-center justify-center"
            onClick={() => setQty(qty < stock ? qty + 1 : qty)}
          >
            <FiChevronUp />
          </button>
          <button
            className="cursor-pointer h-1/2 aspect-square flex items-center justify-center"
            onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
          >
            <FiChevronDown />
          </button>
        </div>
      </div>
      <Button className="px-20 w-full">
        <FiShoppingBag size={24} />
        Add to Chart
      </Button>
      <Button variant="dark" className="px-20 w-full" onClick={() => push("/checkout")}>
        Checkout Now <FiArrowRight size={14} />
      </Button>
    </div>
  );
};

export default ProductActions;
