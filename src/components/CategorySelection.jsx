import { Link } from 'react-router-dom';
import '../index.css';

const categories = [
  {
    name: 'Classic',
    description: 'Vintage stamps from the golden age of philately',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Commemorative',
    description: 'Stamps celebrating important events and anniversaries',
    image: 'https://images.unsplash.com/photo-1580637250481-b78db3e6f84d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Thematic',
    description: 'Stamps organized by themes like animals, sports, and art',
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Worldwide',
    description: 'Stamps from countries around the globe',
    image: 'https://images.unsplash.com/photo-1548032885-b5e38734688a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }
];

const CategorySelection = () => {
  return (
    <section id="categories" className="categories">
      <div className="container">
        <h2 className="section-title">Our Categories</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <Link to={`/category/${category.name.toLowerCase()}`} key={index} className="category-card">
              <div className="category-image" style={{ backgroundImage: `url(${category.image})` }}></div>
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