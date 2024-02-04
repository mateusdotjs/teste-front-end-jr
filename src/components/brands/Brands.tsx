import Title from "../global/Title";
import Brand from "./Brand";

const Brands = () => {
  return (
    <section className="container">
      <Title title="Navegue por marcas" decoration={false} />
      <ul className="brands-container">
        <li>
          <Brand />
        </li>
        <li>
          <Brand />
        </li>
        <li>
          <Brand />
        </li>
        <li>
          <Brand />
        </li>
        <li>
          <Brand />
        </li>
        <li>
          <Brand />
        </li>
        <li>
          <Brand />
        </li>
        <li>
          <Brand />
        </li>
      </ul>
    </section>
  );
};

export default Brands;
