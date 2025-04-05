import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategorySelection from '../components/CategorySelection';
import Cruisal from '../components/Cruisal';
import About from '../components/About';
import Footer from '../components/Footer';
import GetInTouch from '../components/GetInTouch';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CategorySelection />
      <Cruisal />
      <About />
      {/* <GetInTouch /> */}
      <Footer />
    </>
  );
};

export default Home;