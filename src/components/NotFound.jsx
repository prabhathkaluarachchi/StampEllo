import { Link } from 'react-router-dom';
import '../index.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn">Return Home</Link>
    </div>
  );
};

export default NotFound;