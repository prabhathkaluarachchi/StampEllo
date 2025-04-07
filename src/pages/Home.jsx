import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategorySelection from '../components/CategorySelection';
import Cruisal from '../components/Cruisal';
import About from '../components/About';
import Footer from '../components/Footer';
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CategorySelection />
      <Cruisal />
      <ScrollToTop />      
      <About />
      <Footer />
    </>
  );
};

export default Home;