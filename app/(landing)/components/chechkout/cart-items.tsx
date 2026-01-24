"use client";
import { cartList } from "../ui/cart-popup";
import Image from "next/image";
import Button from "../ui/button";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

type TCartItems = {
  handlePayment: () => void;
};

const CartItems = ({handlePayment}: TCartItems) => {
  const {items, removeItem} = useCartStore();
  const { push } = useRouter();

  const totalPrice = items.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <CardWithHeader title="Cart Items">
      <div className="flex flex-col justify-between h-[calc(100%-70px)]">
      <div className="overflow-auto max-h-[300px]">
        {items.map((item, index) => (
          <div className="border-b border-gray-200 p-4 flex gap-3" key={item._id}>
            <div className="bg-primary-light aspect-square w-16 flex justify-center itmes-center">
              <Image
                src={getImageUrl(item.imageUrl)}
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
            <Button size="small" variant="ghost" className="w7 h-7 p-0! self-center ml-auto" onClick={() => removeItem(item._id)}>
              <FiTrash2 />
            </Button>
          </div>
        ))};
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
      <Button type="button" variant="dark" className="w-full mt-4" onClick={handlePayment}>
        <FiCreditCard />
        Proceed to Payment
      </Button>
      </div>
    </CardWithHeader>

  );
};

export default CartItems;
