"use client";
import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import TransactionTable from "../../components/transactions/transaction-table";
import TransactionModal from "../../components/transactions/transaction-modal";
import { useState } from "react";


const TransactionManagement = () => {
    const [isOpen, setIsOpen] = useState(false); // Placeholder for modal state management
  
    const handleCloseModal = () => {
      setIsOpen(false);
    }

    const handleViewDetails = () => {
      setIsOpen(true)
    }

    return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="font-bold text-2xl">Transactions</h1>
          <p className="opacity-50">Verify incoming payments and manage orders.</p>
        </div>
      </div>
      <TransactionTable onViewDetails={handleViewDetails}/>
      <TransactionModal isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default TransactionManagement;
