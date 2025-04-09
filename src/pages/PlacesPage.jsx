
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














// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import StampCard from '../components/StampCard';
// import Pagination from '../components/Pagination';
// import ScrollToTop from '../components/ScrollToTop';

// const PlacesPage = () => {
//   const places = [
//     { id: 1, title: 'GERANDI ELLA WATERFALL', year: '2024-02-02', description: '41mm x 30mm, Horizontal', country: 'Sri Lanka', value: 'LKR 50.00', image: '/stamps/stampp1.jpg' },
//     { id: 2, title: 'ANCIENT BUILDING OF SRI LANKA', year: '2022-01-20', description: '41mm x 30mm, Horizontal', country: 'Sri Lanka', value: 'LKR 15.00', image: '/stamps/stampp2.jpg' },
//     { id: 3, title: 'SRI LANKA SIGIRIYA ', year: '2023-06-15', description: '41mm x 30mm, Horizontal', country: 'Sri Lanka', value: 'LKR 50.00', image: '/stamps/stampp3.jpg' },
//     { id: 4, title: 'THINIPITIYA VIHARAYA', year: '2023-05-04', description: '60mm x 30mm, Horizontal', country: 'Sri Lanka', value: 'LKR 50.00', image: '/stamps/stampp4.jpg' },
//     { id: 5, title: 'ROYAL BOTANIC GARDEN PERADENIYA', year: '2022-09-12', description: '41mm x 30mm, Vertical', country: 'Sri Lanka', value: 'LKR 50.00', image: '/stamps/stampp5.jpg' },

//   ];

//   const itemsPerPage = 8;
//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const currentStamps = places.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
//   const totalPages = Math.ceil(places.length / itemsPerPage);

//   return (
//     <>
//       <Navbar />
//       <div className="category-page places-page">
//         <h1 className="page-title">Places Collection</h1>
//         <p className="page-description">
//           Explore stamps celebrating iconic places around the world.
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

// export default PlacesPage;
