import '../index.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Discover Rare & Beautiful Stamps</h1>
          <p className="hero-subtitle">Explore our curated collection of philatelic treasures from around the world</p>
          <div className="hero-buttons">
            <a href="#categories" className="btn">Browse Categories</a>
            <a href="#recent" className="btn btn-outline">Recent Additions</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;