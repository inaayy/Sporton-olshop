import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";

export const cartList = [
  {
    name: "SportOn Product 1",
    category: "Running",
    price: 450000,
    qty: 2,
    imgUrl: "sport-shirt.svg",
  },
  {
    name: "SportOn Product 2",
    category: "Running",
    price: 250000,
    qty: 5,
    imgUrl: "sport-shirt-1.svg",
  },
  {
    name: "SportOn Product 3",
    category: "Running",
    price: 220000,
    qty: 5,
    imgUrl: "sepatu.svg",
  },
  {
    name: "SportOn Product 4",
    category: "Running",
    price: 240000,
    qty: 2,
    imgUrl: "basketball.svg",
  },
];

const CartPopup = () => {
  const totalPrice = cartList.reduce((total, item) => total + item.price * item.qty, 0);
  return (
    <div className="absolute bg-white right-0 top-12 shadow-xl shadow-black/10 border border-gray-200 w-80 z-10">
      <div className="p-4 border-b border-gray-200 font-bold text-center">Shopping Cart</div>
      <div>
        {cartList.map((item, index) => (
          <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
            <div className="bg-primary-light aspect-square w-16 flex justify-center itmes-center">
              <Image
                src={`/images/products/${item.imgUrl}`}
                width={63}
                height={63}
                alt={item.name}
                className="aspect-square object-contain"
              />
            </div>
            <div className="self-center">
              <div className="text-sm font-medium">{item.name}</div>
              <div className="flex gap-3 font-medium text-xs">
                <div>{item.qty}</div>
                <div className="text-primary">
                  {Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    maximumSignificantDigits: 3,
                  }).format(item.price)}
                </div>
              </div>
            </div>
            <Button size="small" variant="ghost" className="w7 h-7 p-0! self-center ml-auto">
              <FiTrash2 />
            </Button>
          </div>
        ))}
        <div className="border-t border-gray-200 p-4">
          <div className="flex justify-between font-semibold">
            <div className="text-sm">Total</div>
            {/* <div className="text-primary text-xs">{totalPrice}</div> */}
            <div className="text-primary text-xs">
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumSignificantDigits: 3,
              }).format(totalPrice)}
            </div>
          </div>
        </div>
        <Button variant="dark" size="small" className="w-full mt-4">
          Checkout Now
          <FiArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CartPopup;
