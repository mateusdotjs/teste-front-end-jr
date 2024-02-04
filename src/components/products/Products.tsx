import "./products.scss";
import Title from "../global/Title";
import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import LinkCard from "../global/LinkCard";
import Modal from "./Modal";
import Carousel from "../carousel/Carousel";
import NextArrow from "../carousel/NextArrow";
import PrevArrow from "../carousel/PrevArrow";

export type ProductType = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};

const Products = () => {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ProductType | null>(null);
  const carouselRef = useRef<HTMLUListElement>(null);

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 500;
    }
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 500;
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      const url =
        "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (!data.success) {
          throw new Error("Erro ao recuperar dados de produtos.");
        }
        setProducts(data.products);
      } catch (error) {
        alert(error);
        console.log(error);
        setProducts(null);
      }
    };

    getProducts();
  }, []);

  return (
    <section className="container">
      <Title title="Produtos relacionados" decoration={true} />
      <ul className="products-categories">
        <li>celular</li>
        <li>acessórios</li>
        <li>tablets</li>
        <li>notebooks</li>
        <li>TVs</li>
        <li>Ver todos</li>
      </ul>
      <div>
        <div className="products-container">
          <NextArrow onClick={handleNextClick} />
          <PrevArrow onClick={handlePrevClick} />

          <ul className="products-slider" ref={carouselRef}>
            {products &&
              products.map((product, i) => {
                return (
                  <li key={i}>
                    <ProductCard
                      productName={product.productName}
                      descriptionShort={product.descriptionShort}
                      photo={product.photo}
                      price={product.price}
                      setIsModalOpen={setIsModalOpen}
                      setModalData={setModalData}
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="products-partners">
        <LinkCard />
        <LinkCard />
      </div>
      {isModalOpen && modalData && (
        <Modal modalData={modalData} setIsModalOpen={setIsModalOpen} />
      )}
    </section>
  );
};

export default Products;
