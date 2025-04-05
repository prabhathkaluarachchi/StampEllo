import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PersonsPage from './pages/PersonsPage';
import TransportationPage from './pages/TransportationPage';
import PlacesPage from './pages/PlacesPage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import GetInTouchPage from './pages/GetInTouchPage';
import NotFound from './pages/NotFound';  // Make sure to update if needed


function App() {
  return (
    <Router basename="/">
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/persons" element={<PersonsPage />} />
          <Route path="/transportation" element={<TransportationPage />} />
          <Route path="/places" element={<PlacesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/get-in-touch" element={<GetInTouchPage />} />          
          {/* Catch-all route for 404 errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
