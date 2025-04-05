import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StampCard from '../components/StampCard';
import Pagination from '../components/Pagination';

const EventsPage = () => {
  const stamps = [
    { id: 1, title: 'Olympics 2000', year: '2000', description: 'A stamp celebrating the Sydney Olympics.', country: 'Australia', value: '$200', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 2, title: 'World Expo 2020', year: '2020', description: 'A stamp featuring the World Expo held in Dubai.', country: 'UAE', value: '$220', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 3, title: 'World Cup 2018', year: '2018', description: 'A stamp commemorating the FIFA World Cup in Russia.', country: 'Russia', value: '$250', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 4, title: 'Euro 2016', year: '2016', description: 'A stamp celebrating the UEFA European Championship held in France.', country: 'France', value: '$210', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 5, title: 'Summer Olympics 1996', year: '1996', description: 'A stamp commemorating the Atlanta Summer Olympics.', country: 'USA', value: '$180', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 6, title: 'Commonwealth Games 2014', year: '2014', description: 'A stamp celebrating the Glasgow Commonwealth Games.', country: 'Scotland', value: '$230', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 7, title: 'Winter Olympics 2014', year: '2014', description: 'A stamp celebrating the Sochi Winter Olympics.', country: 'Russia', value: '$240', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 8, title: 'Asian Games 2018', year: '2018', description: 'A stamp celebrating the 2018 Asian Games in Jakarta-Palembang.', country: 'Indonesia', value: '$200', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 9, title: 'Pan American Games 2019', year: '2019', description: 'A stamp celebrating the Pan American Games held in Lima, Peru.', country: 'Peru', value: '$210', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 10, title: 'World Expo 2010', year: '2010', description: 'A stamp commemorating the World Expo in Shanghai, China.', country: 'China', value: '$220', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 11, title: 'FIFA World Cup 2014', year: '2014', description: 'A stamp commemorating the World Cup held in Brazil.', country: 'Brazil', value: '$230', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 12, title: 'Winter Olympics 2010', year: '2010', description: 'A stamp celebrating the Vancouver Winter Olympics.', country: 'Canada', value: '$240', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' }
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
      <Footer />
    </>
  );
};

export default EventsPage;
