import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StampCard from '../components/StampCard';
import Pagination from '../components/Pagination';
import ScrollToTop from '../components/ScrollToTop';

const EventsPage = () => {
  const stamps = [
    { id: 1, title: 'Olympics 2000', year: '2000', description: 'A stamp celebrating the Sydney Olympics.', country: 'Australia', value: '$200', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 2, title: 'World Expo 2020', year: '2020', description: 'A stamp featuring the World Expo held in Dubai.', country: 'UAE', value: '$220', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 3, title: 'World Cup 2018', year: '2018', description: 'A stamp commemorating the FIFA World Cup in Russia.', country: 'Russia', value: '$250', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 4, title: 'Euro 2016', year: '2016', description: 'A stamp celebrating the UEFA European Championship held in France.', country: 'France', value: '$210', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },

  ];

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentStamps = stamps.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(stamps.length / itemsPerPage);

  return (
    <>
      <Navbar />
      <div className="category-page events-page">
        <h1 className="page-title">Events Collection</h1>
        <p className="page-description">
          Explore stamps commemorating historical and global events.
        </p>

        <div className="stamps-grid">
          {currentStamps.map((stamp) => (
            <StampCard key={stamp.id} stamp={stamp} />
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

export default EventsPage;
