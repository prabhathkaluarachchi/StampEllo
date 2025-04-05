import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StampCard from '../components/StampCard';
import Pagination from '../components/Pagination';

const PersonsPage = () => {
  const stamps = [
    { id: 1, title: 'Albert Einstein', image: '/images/einstein.jpg', year: '1955', description: 'Celebrating the life and achievements of the famous physicist.', country: 'Germany', value: '$200' },
    { id: 2, title: 'Mahatma Gandhi', image: '/images/gandhi.jpg', year: '1948', description: 'A commemorative stamp honoring India\'s freedom leader.', country: 'India', value: '$150' },
    { id: 3, title: 'Marie Curie', image: '/images/marie-curie.jpg', year: '1967', description: 'Honoring the pioneering scientist in chemistry and physics.', country: 'France', value: '$180' },
    { id: 4, title: 'Isaac Newton', image: '/images/newton.jpg', year: '1727', description: 'The father of classical mechanics and gravity theory.', country: 'England', value: '$250' },
    { id: 5, title: 'Charles Darwin', image: '/images/darwin.jpg', year: '1882', description: 'Famous for his contributions to the theory of evolution.', country: 'England', value: '$220' },
    { id: 6, title: 'Nikola Tesla', image: '/images/tesla.jpg', year: '1943', description: 'Inventor and electrical engineer.', country: 'Serbia', value: '$200' },
    { id: 7, title: 'Galileo Galilei', image: '/images/galileo.jpg', year: '1642', description: 'Known for his advancements in astronomy and physics.', country: 'Italy', value: '$230' },
    { id: 8, title: 'Albert Einstein', image: '/images/einstein2.jpg', year: '1921', description: 'Famous for his theory of relativity.', country: 'Germany', value: '$180' },
    { id: 9, title: 'Leonardo da Vinci', image: '/images/davinci.jpg', year: '1519', description: 'Renaissance polymath and artist.', country: 'Italy', value: '$300' },
    { id: 10, title: 'Stephen Hawking', image: '/images/hawking.jpg', year: '2018', description: 'Famous theoretical physicist and cosmologist.', country: 'England', value: '$190' },
    { id: 11, title: 'Marie Curie', image: '/images/marie-curie2.jpg', year: '1934', description: 'The first woman to win a Nobel Prize.', country: 'Poland', value: '$250' },
    { id: 12, title: 'Thomas Edison', image: '/images/edison.jpg', year: '1931', description: 'Inventor of the electric light bulb.', country: 'USA', value: '$210' },
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
      <Footer />
    </>
  );
};

export default PersonsPage;

