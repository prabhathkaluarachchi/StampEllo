import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Make sure this is correctly importing your styles

const recentStamps = [
  {
    id: 1,
    title: 'MOHIDEEN BAIG',
    year: '2020-02-20',
    description: '30mm x 41mm, Vertical',
    category: 'Persons',
    image: '/stamps/stamp6.jpg',  // Replace with actual path
  },
  {
    id: 2,
    title: 'GERANDI ELLA WATERFALL',
    year: '2024-02-02',
    description: '41mm x 30mm, Horizontal',
    category: 'Places',
    image: '/stamps/stampp1.jpg',  // Replace with actual path
  },
  {
    id: 3,
    title: 'Blue Mauritius',
    year: '1847',
    description: 'One of the rarest and most valuable stamps',
    category: 'Classic',
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',  // Replace with actual path
  },
  {
    id: 4,
    title: 'Treskilling Yellow',
    year: '1855',
    description: 'Swedish stamp with color error',
    category: 'Classic',
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',  // Replace with actual path
  },
  {
    id: 5,
    title: 'Basel Dove',
    year: '1845',
    description: 'First tricolor stamp in the world',
    category: 'Classic',
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',  // Replace with actual path
  },
];

const Cruisal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % recentStamps.length);
    }, 5000); // Carousel will automatically change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + recentStamps.length) % recentStamps.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recentStamps.length);
  };

  return (
    <section id="recent" className="recent-stamps">
      <div className="container">
        <h2 className="section-title">Recently Added</h2>
        <div className="carousel">
          <button className="carousel-button prev" onClick={goToPrev}>&#10094;</button>
          
          <div className="carousel-content">
            {recentStamps.map((stamp, index) => (
              <div 
                key={stamp.id} 
                className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="stamp-card">
                  <div 
                    className="stamp-image" 
                    style={{ backgroundImage: `url(${stamp.image})` }}
                  ></div>
                  <div className="stamp-info">
                    <h3>{stamp.title}</h3>
                    <p className="stamp-year">{stamp.year}</p>
                    <p className="stamp-description">{stamp.description}</p>
                    <Link 
                      to={`/category/${stamp.category.toLowerCase()}`} 
                      className="stamp-category"
                    >
                      {stamp.category}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-button next" onClick={goToNext}>&#10095;</button>
        </div>
        
        <div className="carousel-indicators">
          {recentStamps.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cruisal;
