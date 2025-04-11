import { Link } from "react-router-dom";

const categories = [
  {
    name: "Persons",
    description:
      "Stamps honoring historical figures, cultural icons, and famous personalities.",
    image: "./assets/category1.jpg",
    path: "/persons",
  },
  {
    name: "Transportation",
    description:
      "Discover stamps featuring classic vehicles, trains, ships, and aviation milestones.",
    image: "./assets/category2.jpg",
    path: "/transportation",
  },
  {
    name: "Places",
    description:
      "Explore landmarks, scenic landscapes, and architectural wonders from around the world.",
    image: "./assets/category3.jpg",
    path: "/places",
  },
  {
    name: "Events",
    description:
      "Commemorative stamps capturing historic events, celebrations, and anniversaries.",
    image: "./assets/category4.jpg",
    path: "/events",
  },
];

const CategorySelection = () => {
  return (
    <section id="categories" className="categories">
      <div className="container">
        <h2 className="section-title">Our Categories</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <Link to={category.path} key={index} className="category-card">
              <div
                className="category-image"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySelection;
