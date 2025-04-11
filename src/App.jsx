import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PersonsPage from "./pages/PersonsPage";
import TransportationPage from "./pages/TransportationPage";
import PlacesPage from "./pages/PlacesPage";
import EventsPage from "./pages/EventsPage";
import AboutPage from "./pages/AboutPage";
import GetInTouchPage from "./pages/GetInTouchPage";
import NotFound from "./pages/NotFound"; // Make sure to update if needed
import AddStampPage from "./pages/AddStampPage"; // ✅ Import the new page
import ManageStamps from "./components/ManageStamps"; // If ManageStamps is used here

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

          {/* ✅ New Route for Adding a Stamp */}
          <Route path="/add-stamp" element={<AddStampPage />} />

          {/* ✅ New Route for Managing Stamps (corrected the component name) */}
          <Route path="/manage-stamp" element={<ManageStamps />} />

          {/* Catch-all route for 404 errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
