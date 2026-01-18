"use client";
import { cartList } from "../ui/cart-popup";
import Image from "next/image";
import Button from "../ui/button";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";
import { useRouter } from "next/navigation";

const CartItems = () => {
  const { push } = useRouter();
  const totalPrice = cartList.reduce((total, item) => total + item.price * item.qty, 0);

  const payment = () => {};

  return (
    <CardWithHeader title="Cart Items">
      <div className="overflow-auto max-h-[300px]">
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
      </div>
      <div className="flex justify-between font-semibold p-4 mt-10">
        <div className="text-sm">Total</div>
        <div className="text-primary text-xs">
          {Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumSignificantDigits: 3,
          }).format(totalPrice)}
        </div>
      </div>
      <Button variant="dark" className="w-full mt-4" onClick={() => push("/payment")}>
        <FiCreditCard />
        Proceed to Payment
      </Button>
    </CardWithHeader>
  );
};

export default CartItems;
