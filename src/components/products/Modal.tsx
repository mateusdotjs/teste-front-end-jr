import { Dispatch, SetStateAction } from "react";
import { ProductType } from "./Products";
import "./modal.scss";
import Close from "../../assets/icons/modal/close.svg?react";

type ModalProps = {
  modalData: ProductType;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ modalData, setIsModalOpen }: ModalProps) => {
  const { photo, productName, price, descriptionShort } = modalData;

  return (
    <div className="modal-bg">
      <div className="modal">
        <button
          aria-label="Fechar"
          className="modal-btn-close"
          onClick={() => setIsModalOpen(false)}
        >
          <Close />
        </button>
        <img src={photo} />
        <div className="modal-info">
          <p className="modal-title">{productName}</p>
          <p className="modal-price">{price}</p>
          <p className="modal-description">{descriptionShort}</p>
          <p>Veja mais detalhes do produto {">"}</p>
          <button>-</button>
          <input type="number" />
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
