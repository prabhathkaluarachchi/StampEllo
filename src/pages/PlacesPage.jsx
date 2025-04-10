
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StampCard from '../components/StampCard';
import Pagination from '../components/Pagination';
import ScrollToTop from '../components/ScrollToTop';

const PlacesPage = () => {
  const [stamps, setStamps] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchStamps = async () => {
      try {
        const response = await axios.get('https://stampello.onrender.com/api/stamps?category=Places');
        setStamps(response.data);
      } catch (error) {
        console.error('Failed to fetch stamps:', error);
      }
    };
    fetchStamps();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentStamps = stamps.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(stamps.length / itemsPerPage);

  return (
    <>
      <Navbar />
      <div className="category-page places-page">
        <h1 className="page-title">Places Collection</h1>
        <p className="page-description">
          Explore stamps celebrating iconic places around the world.
        </p>

        <div className="stamps-grid">
          {currentStamps.map((stamp) => (
            <StampCard key={stamp._id} stamp={stamp} />
          ))}
        </div>

        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange}
        />
      </div>
      <ScrollToTop /> 
      <Footer />
    </>
  );
};

export default PlacesPage;


