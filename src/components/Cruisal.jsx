import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const recentStamps = [
  {
    id: 1,
    title: 'Penny Black',
    year: '1840',
    description: 'The world\'s first adhesive postage stamp',
    category: 'Classic',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Penny_black.jpg/500px-Penny_black.jpg'
  },
  {
    id: 2,
    title: 'Inverted Jenny',
    year: '1918',
    description: 'Famous US airmail stamp with printing error',
    category: 'Commemorative',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Inverted_Jenny.jpg/500px-Inverted_Jenny.jpg'
  },
  {
    id: 3,
    title: 'Blue Mauritius',
    year: '1847',
    description: 'One of the rarest and most valuable stamps',
    category: 'Classic',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Mauritius_Post_Office_2p.jpg/500px-Mauritius_Post_Office_2p.jpg'
  },
  {
    id: 4,
    title: 'Treskilling Yellow',
    year: '1855',
    description: 'Swedish stamp with color error',
    category: 'Classic',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Treskilling_yellow.jpg/500px-Treskilling_yellow.jpg'
  },
  {
    id: 5,
    title: 'Basel Dove',
    year: '1845',
    description: 'First tricolor stamp in the world',
    category: 'Classic',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Basel_Dove.jpg/500px-Basel_Dove.jpg'
  }
];

const Cruisal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % recentStamps.length);
    }, 5000);
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