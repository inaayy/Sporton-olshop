import { FiCreditCard, FiEdit2, FiTrash2 } from "react-icons/fi";

const bankData = [
  {
    bankName: "BCA",
    accountNumber: "182121727",
    accountName: "PT SportOn Digital",
  },
  {
    bankName: "Mandiri",
    accountNumber: "182121727",
    accountName: "PT SportOn Digital",
  },
  {
    bankName: "BRI",
    accountNumber: "182121727",
    accountName: "PT SportOn Digital",
  },
];

const BankInfoList = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {bankData.map((data, index) => (
        <div className="bg-white rounded-lg border border-gray-200" key={index}>
          <div className="flex justify-between p-5">
            <div className="flex gap-2 items-center">
              <div className="bg-blue-50 text-blue-600 rounded w-12 h-12 justify-center items-center">
                <FiCreditCard size={24} />
              </div>
            </div>
            <div className="font-semibold">{data.bankName}</div>
            <div className="text-xs opacity-50">Bank Transfer</div>
          </div>
          <div className="gap-2 mt-5">
            <button>
              <FiEdit2 size={20} />
            </button>
            <button>
              <FiTrash2 size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BankInfoList;
