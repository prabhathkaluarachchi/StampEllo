import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StampCard from '../components/StampCard';
import Pagination from '../components/Pagination';
import ScrollToTop from '../components/ScrollToTop';

const PersonsPage = () => {
  const stamps = [
    { id: 1, title: 'DESHABANDU VICTOR HETTIGODA', image: '/stamps/stamp1.jpg', year: '2024-09-13', description: '41mm x 30mm, Horizontal', country: 'Sri Lanka', value: 'LKR 50.00' },
    { id: 2, title: 'MOST VEN.GANGODAWILA SOMA THERO', image: '/stamps/stamp2.jpg', year: '2024-06-30', description: '30mm x 41mm, Vertical', country: 'Sri Lanka', value: 'LKR 50.00' },
    { id: 3, title: 'SRIDHARA VINCENT SUBASINGHE', image: '/stamps/stamp3.jpg', year: '2024-08-24', description: '30mm x 41mm, Vertical', country: 'Sri Lanka', value: 'LKR 50.00' },
    { id: 4, title: 'LATE PROF.STANLY WIJESUNDARA', image: '/stamps/stamp4.jpg', year: '2023-12-10', description: '41mm x 30mm, Horizontal', country: 'England', value: 'LKR 50.00' },
    { id: 5, title: 'S.PANIBHARATHA', image: '/stamps/stamp5.jpg', year: '2020-02-24', description: '41mm x 30mm, Horizontal', country: 'Sri Lanka', value: 'LKR 15.00' },
    { id: 6, title: 'MOHIDEEN BAIG', image: '/stamps/stamp6.jpg', year: '2020-02-20', description: '30mm x 41mm, Vertical', country: 'Sri Lanka', value: 'LKR 15.00' }, 
    { id: 7, title: 'MAHATMA GANDHI', image: '/stamps/stamp7.jpg', year: '2019-10-02', description: '30mm x 41mm, Vertical', country: 'Sri Lanka', value: 'LKR 100.00' },
    { id: 8, title: 'PROF.SANGEETH NIPUN SANATH NANDASIRI', image: '/stamps/stamp8.jpg', year: '2025-02-15', description: '30mm x 41mm, Vertical', country: 'Sri Lanka', value: 'LKR 50.00' },
    { id: 9, title: 'KALA KEERTHI PANDIT WIMAL ABEYASUNDARA', image: '/stamps/stamp9.jpg', year: '2024-09-27', description: '30mm x 41mm, Vertical', country: 'Sri Lanka', value: 'LKR 50.00' },
    { id: 10, title: 'SOILIS MENDIS', image: '/stamps/stamp10.jpg', year: '2019-10-08', description: '41mm x 30mm, Horizontal', country: 'Sri Lanka', value: 'LKR 15.00' },
    
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
      <div className="category-page persons-page">
        <h1 className="page-title">Persons Collection</h1>
        <p className="page-description">
          Explore stamps featuring notable individuals from history, science, and culture.
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

export default PersonsPage;

