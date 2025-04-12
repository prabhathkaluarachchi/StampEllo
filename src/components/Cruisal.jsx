import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';

const Cruisal = () => {
  const [stamps, setStamps] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentStamps = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://stampello.onrender.com/api/stamps');
        const recentStamps = response.data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // sort by newest
          .slice(0, 5); // take only 5
        setStamps(recentStamps);
      } catch (error) {
        console.error('Error fetching stamps:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentStamps();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stamps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [stamps]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stamps.length) % stamps.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stamps.length);
  };

  return (
    <section id="recent" className="recent-stamps">
      <div className="container">
        <h2 className="section-title">Recently Added</h2>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="carousel fade-in">
              <button className="carousel-button prev" onClick={goToPrev}>&#10094;</button>

              <div className="carousel-content">
                {stamps.map((stamp, index) => {
                  const imageUrl = `https://stampello.onrender.com${stamp.image}`;
                  return (
                    <div
                      key={stamp._id}
                      className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                    >
                      <div className="stamp-card">
                        <div
                          className="stamp-image"
                          style={{ backgroundImage: `url(${imageUrl})` }}
                        ></div>
                        <div className="stamp-info">
                          <h3>{stamp.title}</h3>
                          <p className="stamp-year">{stamp.year}</p>
                          <p className="stamp-description">{stamp.description}</p>
                          <Link to={`/${stamp.category.toLowerCase()}`} className="stamp-category">
                            {stamp.category}
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="carousel-button next" onClick={goToNext}>&#10095;</button>
            </div>

            <div className="carousel-indicators">
              {stamps.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                ></button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cruisal;



