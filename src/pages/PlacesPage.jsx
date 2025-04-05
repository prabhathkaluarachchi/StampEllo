import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StampCard from '../components/StampCard';
import Pagination from '../components/Pagination';

const PlacesPage = () => {
  const places = [
    { id: 1, title: 'Great Wall of China', year: '2000', description: 'A stamp celebrating the Great Wall of China.', country: 'China', value: '$200', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 2, title: 'Eiffel Tower', year: '2010', description: 'A stamp celebrating the Eiffel Tower in Paris.', country: 'France', value: '$220', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 3, title: 'Sydney Opera House', year: '2015', description: 'A stamp celebrating the Sydney Opera House in Australia.', country: 'Australia', value: '$250', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 4, title: 'Colosseum', year: '2012', description: 'A stamp celebrating the Colosseum in Rome.', country: 'Italy', value: '$210', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 5, title: 'Mount Fuji', year: '2018', description: 'A stamp celebrating Mount Fuji in Japan.', country: 'Japan', value: '$180', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 6, title: 'Machu Picchu', year: '2017', description: 'A stamp celebrating Machu Picchu in Peru.', country: 'Peru', value: '$230', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 7, title: 'Pyramids of Giza', year: '2020', description: 'A stamp celebrating the Pyramids of Giza in Egypt.', country: 'Egypt', value: '$240', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 8, title: 'Stonehenge', year: '2019', description: 'A stamp celebrating Stonehenge in the UK.', country: 'UK', value: '$200', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 9, title: 'Taj Mahal', year: '2005', description: 'A stamp celebrating the Taj Mahal in India.', country: 'India', value: '$220', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 10, title: 'Mount Rushmore', year: '2008', description: 'A stamp celebrating Mount Rushmore in the USA.', country: 'USA', value: '$230', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 11, title: 'Christ the Redeemer', year: '2014', description: 'A stamp celebrating Christ the Redeemer in Brazil.', country: 'Brazil', value: '$240', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
    { id: 12, title: 'Big Ben', year: '2016', description: 'A stamp celebrating Big Ben in London.', country: 'UK', value: '$250', image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' }
  ];

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentStamps = places.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(places.length / itemsPerPage);

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

export default PlacesPage;
