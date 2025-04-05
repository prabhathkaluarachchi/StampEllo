import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StampCard from '../components/StampCard';
import Pagination from '../components/Pagination';

const TransportationPage = () => {
  const transportation = [
    { id: 1, title: 'Steam Train', year: '1800', description: 'A stamp celebrating the first steam train.', country: 'UK', value: '$200', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 2, title: 'Concorde Jet', year: '1976', description: 'A stamp celebrating the supersonic Concorde jet.', country: 'UK/France', value: '$220', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 3, title: 'Wright Brothers', year: '1903', description: 'A stamp commemorating the Wright Brothers\' first flight.', country: 'USA', value: '$250', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 4, title: 'Boeing 747', year: '1968', description: 'A stamp celebrating the Boeing 747 aircraft.', country: 'USA', value: '$210', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 5, title: 'Hot Air Balloon', year: '1782', description: 'A stamp celebrating the first hot air balloon flight.', country: 'France', value: '$180', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 6, title: 'Electric Car', year: '2008', description: 'A stamp celebrating the rise of electric cars.', country: 'USA', value: '$230', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 7, title: 'Subway', year: '1904', description: 'A stamp commemorating the first subway system.', country: 'USA', value: '$240', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 8, title: 'Trolleybus', year: '1900', description: 'A stamp celebrating the trolleybus system.', country: 'Germany', value: '$200', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 9, title: 'Cargo Ship', year: '1900', description: 'A stamp celebrating the global cargo shipping industry.', country: 'UK', value: '$220', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 10, title: 'Bicycle', year: '1817', description: 'A stamp celebrating the invention of the bicycle.', country: 'Germany', value: '$230', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 11, title: 'Aircraft Carrier', year: '1919', description: 'A stamp commemorating the first aircraft carrier.', country: 'USA', value: '$240', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 12, title: 'Hovercraft', year: '1959', description: 'A stamp celebrating the hovercraft innovation.', country: 'UK', value: '$250', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' }
  ];

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentStamps = transportation.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(transportation.length / itemsPerPage);

  return (
    <>
      <Navbar />
      <div className="category-page transportation-page">
        <h1 className="page-title">Transportation Collection</h1>
        <p className="page-description">
          Explore stamps celebrating transportation innovations.
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

export default TransportationPage;
