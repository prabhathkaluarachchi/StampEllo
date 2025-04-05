import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>We're sorry - we've encountered an unexpected error.</p>
          <Link to="/StampEllo" className="btn">
            Return Home
          </Link>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;