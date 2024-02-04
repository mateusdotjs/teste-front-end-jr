import { Dispatch, SetStateAction } from "react";
import "./productCard.scss";
import { ProductType } from "./Products";

type ProductCardProps = ProductType & {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setModalData: Dispatch<SetStateAction<ProductType | null>>;
};

const ProductCard = ({
  productName,
  descriptionShort,
  photo,
  price,
  setIsModalOpen,
  setModalData,
}: ProductCardProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const handleClick = () => {
    setIsModalOpen(true);
    setModalData({
      productName,
      descriptionShort,
      photo,
      price,
    });
  };

  return (
    <div className="product slick-slide" onClick={handleClick}>
      <img src={photo} />
      <h4 className="product-name light font-15">{productName}</h4>
      <p className="product-deal regular font-16">
        {formatCurrency(price + 999.99)}
      </p>
      <p className="product-price bold font-20">{formatCurrency(price)}</p>
      <p className="product-payment regular font-12">
        ou 2x de R$ {formatCurrency(price / 2)} sem juros
      </p>
      <p className="product-freight regular font-12 color-main">Frete grátis</p>
      <button className="product-button font-14 bold">Comprar</button>
    </div>
  );
};

export default ProductCard;
