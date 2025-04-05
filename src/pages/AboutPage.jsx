import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../index.css';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <div className="container">
          <h1 className="page-title">About StampCollector</h1>
          <div className="about-content">
            <section className="about-section">
              <h2>Our Mission</h2>
              <p>
                StampCollector was born from a passion for philately and a desire to make stamp collecting accessible to everyone. Our mission is to preserve the rich history and artistry of postage stamps while building a community of enthusiasts who share our passion.
              </p>
            </section>
            
            <section className="about-section">
              <h2>Our Collection</h2>
              <p>
                With over 10,000 stamps cataloged from more than 150 countries, our collection spans centuries of postal history. From the rare Penny Black to modern commemorative issues, we strive to provide comprehensive information about each stamp in our archive.
              </p>
            </section>
            
            <section className="about-section">
              <h2>The Team</h2>
              <p>
                Our team consists of philatelic experts, historians, and technology enthusiasts working together to create the most comprehensive digital stamp collection. We're constantly adding new stamps and improving our platform based on feedback from our community.
              </p>
            </section>
            
            <section className="about-section">
              <h2>Join Our Community</h2>
              <p>
                Whether you're a seasoned collector or just starting out, we welcome you to explore our collection, contribute your knowledge, and connect with fellow stamp enthusiasts from around the world.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;