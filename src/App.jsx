import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import GetInTouchPage from './pages/GetInTouchPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router basename="/StampEllo">
      <ErrorBoundary>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/get-in-touch" element={<GetInTouchPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;