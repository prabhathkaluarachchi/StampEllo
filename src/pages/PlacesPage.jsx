import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StampCard from '../components/StampCard';
import Pagination from '../components/Pagination';
import ScrollToTop from '../components/ScrollToTop';
import LoadingSpinner from '../components/LoadingSpinner';

const PlacesPage = () => {
  const [stamps, setStamps] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const alertShownRef = useRef(false); // 👈 To avoid double alerts
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchStamps = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://stampello.onrender.com/api/stamps?category=Places');
        setStamps(response.data);
        setLoading(false);

        if (response.data.length === 0 && !alertShownRef.current) {
          alertShownRef.current = true;
          Swal.fire({
            title: 'No Stamps Available',
            text: 'There are currently no stamps in the Places category.',
            icon: 'info',
            confirmButtonText: 'OK',
          });
        }
      } catch (error) {
        console.error('Failed to fetch stamps:', error);
        setLoading(false);
      }
    };

    fetchStamps();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="stamps-grid fade-in">
              {currentStamps.map((stamp) => (
                <StampCard key={stamp._id} stamp={stamp} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default PlacesPage;



