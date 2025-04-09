import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StampCard from '../components/StampCard';
import Pagination from '../components/Pagination';
import ScrollToTop from '../components/ScrollToTop';

const TransportationPage = () => {
  const [stamps, setStamps] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchStamps = async () => {
      try {
        // Fetch transportation stamps from the backend API
        const response = await axios.get('https://stampello.onrender.com/api/stamps?category=Transportation');
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
      <div className="category-page transportation-page">
        <h1 className="page-title">Transportation Collection</h1>
        <p className="page-description">
          Explore stamps celebrating transportation innovations.
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

export default TransportationPage;


























// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import StampCard from '../components/StampCard';
// import Pagination from '../components/Pagination';
// import ScrollToTop from '../components/ScrollToTop';

// const TransportationPage = () => {
//   const transportation = [
//     { id: 1, title: 'NATIONAL TRANSPORT COMMISSION', year: '2019-07-12', description: '190mm x 115mm, Horizontal', country: 'Sri Lanka', value: 'LKR 10.00', image: '/stamps/stampt1.jpg' },
//     { id: 2, title: 'SRI LANKA TRANSPORT BOARD', year: '1958', description: 'Horizontal', country: 'Sri Lanka', value: 'LKR 5.75', image: '/stamps/stampt2.jpg' },
//     { id: 3, title: 'SRI LANKA TRANSPORT BOARD', year: '2006', description: '30mm x 25mm, Horizontal', country: 'Sri Lanka', value: 'LKR 5.00', image: '/stamps/stampt3.jpg'},

//   ];

//   const itemsPerPage = 8;
//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const currentStamps = transportation.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
//   const totalPages = Math.ceil(transportation.length / itemsPerPage);

//   return (
//     <>
//       <Navbar />
//       <div className="category-page transportation-page">
//         <h1 className="page-title">Transportation Collection</h1>
//         <p className="page-description">
//           Explore stamps celebrating transportation innovations.
//         </p>

//         <div className="stamps-grid">
//           {currentStamps.map((stamp) => (
//             <StampCard key={stamp.id} stamp={stamp} />
//           ))}
//         </div>

//         <Pagination 
//           currentPage={currentPage} 
//           totalPages={totalPages} 
//           onPageChange={handlePageChange}
//         />
//       </div>
//       <ScrollToTop /> 
//       <Footer />
//     </>
//   );
// };

// export default TransportationPage;
