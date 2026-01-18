import OrderInformation from "../components/chechkout/order-information";
import CartItems from "../components/chechkout/cart-items";

const Checkout = () => {
  return (
    <main className="bg-gray-100 min-h-[80vh]">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="text-5xl font-bold text-center">Checkout Now</h1>
        <div className="grid grid-cols-2 gap-14 mt-11">
          {/* <div className="bg-white p-10 w-full"></div>
          <div className="bg-white p-10 w-full"></div> */}
          <OrderInformation />
          <CartItems />
        </div>
      </div>
    </main>
  );
};

export default Checkout;
