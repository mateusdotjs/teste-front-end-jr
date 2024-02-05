import "./category.scss";

type CategoryProps = {
  title: string;
  url: string;
  active: boolean;
};

const Category = ({ title, url, active }: CategoryProps) => {
  console.log(active);
  return (
    <li className="category">
      <div className={`category-bg ${active ? "active" : ""}`}>
        <img src={url} />
      </div>
      <span className={`${active ? "active" : ""}`}>{title}</span>
    </li>
  );
};

export default Category;
