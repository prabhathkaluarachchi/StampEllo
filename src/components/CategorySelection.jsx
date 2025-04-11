import { Link } from 'react-router-dom';
import '../index.css';

const categories = [
  {
    name: 'Persons',
    description: 'Vintage stamps from the golden age of philately',
    image: './assets/category1.jpg',
    path: '/persons'
  },
  {
    name: 'Transportation',
    description: 'Stamps celebrating important events and anniversaries',
    image: './assets/category2.jpg',
    path: '/transportation'
  },
  {
    name: 'Places',
    description: 'Stamps organized by themes like animals, sports, and art',
    image: './assets/category3.jpg',
    path: '/places'
  },
  {
    name: 'Events',
    description: 'Stamps from countries around the globe',
    image: './assets/category4.jpg',
    path: '/events'
  }
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
