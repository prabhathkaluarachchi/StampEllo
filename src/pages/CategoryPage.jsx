import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StampCard from '../components/StampCard';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';
import '../index.css';

// Mock data for stamps (in a real app, this would come from an API)
const allStamps = {
  classic: Array(24).fill().map((_, i) => ({
    id: i + 1,
    title: `Classic Stamp ${i + 1}`,
    year: `${1840 + i}`,
    description: `A beautiful classic stamp from ${1840 + i} with intricate design and historical significance.`,
    country: i % 2 === 0 ? 'United Kingdom' : 'United States',
    value: `$${(5 + i * 0.5).toFixed(2)}`,
    image: `https://source.unsplash.com/random/300x200/?stamp,classic,${i}`
  })),
  commemorative: Array(24).fill().map((_, i) => ({
    id: i + 1,
    title: `Commemorative Stamp ${i + 1}`,
    year: `${1950 + i}`,
    description: `Special edition stamp commemorating an important event from ${1950 + i}.`,
    country: i % 2 === 0 ? 'Canada' : 'Australia',
    value: `$${(3 + i * 0.3).toFixed(2)}`,
    image: `https://source.unsplash.com/random/300x200/?stamp,commemorative,${i}`
  })),
  thematic: Array(24).fill().map((_, i) => ({
    id: i + 1,
    title: `Thematic Stamp ${i + 1}`,
    year: `${1970 + i}`,
    description: `Stamp featuring a theme like animals, sports, or art from ${1970 + i}.`,
    country: i % 3 === 0 ? 'France' : (i % 3 === 1 ? 'Germany' : 'Italy'),
    value: `$${(2 + i * 0.2).toFixed(2)}`,
    image: `https://source.unsplash.com/random/300x200/?stamp,theme,${i}`
  })),
  worldwide: Array(24).fill().map((_, i) => ({
    id: i + 1,
    title: `Worldwide Stamp ${i + 1}`,
    year: `${1960 + i}`,
    description: `Stamp from various countries around the world issued in ${1960 + i}.`,
    country: ['Japan', 'Brazil', 'India', 'South Africa', 'Russia', 'China'][i % 6],
    value: `$${(4 + i * 0.4).toFixed(2)}`,
    image: `https://source.unsplash.com/random/300x200/?stamp,world,${i}`
  }))
};

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const stampsPerPage = 8;
  
  // Get current stamps
  const indexOfLastStamp = currentPage * stampsPerPage;
  const indexOfFirstStamp = indexOfLastStamp - stampsPerPage;
  const currentStamps = allStamps[categoryName]?.slice(indexOfFirstStamp, indexOfLastStamp) || [];
  const totalPages = Math.ceil((allStamps[categoryName]?.length || 0) / stampsPerPage);
  
  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [categoryName]);

  if (!allStamps[categoryName]) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="category-page">
        <div className="container">
          <h1 className="page-title">{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Stamps</h1>
          <p className="page-description">
            Browse our collection of {categoryName} stamps from around the world. Each stamp tells a unique story.
          </p>
          
          <div className="stamps-grid">
            {currentStamps.map(stamp => (
              <StampCard key={stamp.id} stamp={stamp} />
            ))}
          </div>
          
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={setCurrentPage} 
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;