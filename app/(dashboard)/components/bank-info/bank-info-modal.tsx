import { useState } from "react";
import ImageUploadPreview from "../ui/image-upload-preview";
import Modal from "../ui/modal";
import Button from "@/app/(landing)/components/ui/button";

type TBankInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BankInfoModal = ({ isOpen, onClose }: TBankInfoModalProps) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Bank Accocunt">
      <div className="flex gap-6">
        <div className="flex flex-col gap-4 w-full">
          <div className="input-group-admin">
            <label htmlFor="bankName">Bank Name</label>
            <input type="text" id="bankName" name="bankName" placeholder="e. g. Madiri, BCA, BRI" />
          </div>
          <div className="input-group-admin">
            <label htmlFor="accountNumber">Account Name</label>
            <input type="text" id="accountNumber" name="accountNumber" placeholder="2198099719" />
          </div>
          <div className="input-group-admin">
            <label htmlFor="accountHolder">Account Holder</label>
            <input type="text" id="accountHolder" name="accountHolder" placeholder="Holder Name as registered on the account" />
          </div>
          <Button className="ml-auto mt-3 rounded-lg">Add Bank Account</Button>
        </div>
      </div>
    </Modal>
  );
};

export default BankInfoModal;
