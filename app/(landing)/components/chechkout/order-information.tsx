import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
  return (
    <CardWithHeader title="Order information">
      {/* <div className="bg-white">
        <div className="px-5 py-4 border-b border-gray-200">
          <h2 className="font-bold text-lg">Order Information</h2>
        </div> */}
        <div className="p-5">
          <div className="input-group">
            <label htmlFor="full_name">Full Name</label>
            <input type="text" placeholder="Type your full name" id="full_name" />
          </div>
          <div className="input-group">
            <label htmlFor="nomor_wa">Whatsaap Number</label>
            <input type="text" placeholder="+62xxxxx" id="nomor_wa" />
          </div>
          <div className="input-group">
            <label htmlFor="shipping_address">Shipping Address</label>
            <textarea placeholder="Type your shipping adsress" id="shipping_address" rows={7} />
          </div>
        </div>
      {/* </div> */}
    </CardWithHeader>
  );
};

export default OrderInformation;
