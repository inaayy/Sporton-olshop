import Modal from "../ui/modal";

type TProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ProductModal = ({ isOpen, onClose }: TProductModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Product">
      <div className="flex flex-col gap-6">
        <div className="flex gap-7">
          <div className="w-50"></div>
          <div className="flex flex-col gap-4 w-full">
            <div className="input-group-admin">
              <label htmlFor="productName">Product Name</label>
              <input type="text" 
              id="productName" 
              name="productName" 
              placeholder="e. g. Running Shoes" />
            </div>

            <div className="grid grid-cols-2 flex flex-col gap-4">
              <div className="input-group-admin">
                <label htmlFor="productPrice">Product Price</label>
                <input 
                type="text" 
                id="productPrice" 
                name="productPrice" 
                placeholder="e. g. 500000" />
              </div>
              <div className="input-group-admin">
                <label htmlFor="productStock">Product Stock</label>
                <input 
                type="text" 
                id="productStock" 
                name="productStock" 
                placeholder="e. g. 150" />
              </div>
            </div>
            <div className="input-gorup-admin">
                <label htmlFor="productCategory">Product Category</label>
                <select name="productCategory" id="productCategory">
                    <option value="" disabled>
                        Select Category
                    </option>
                    <option value="running">Running</option>
                    <option value="football">Football</option>
                </select>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
