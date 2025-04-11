import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PersonsPage from "./pages/PersonsPage";
import TransportationPage from "./pages/TransportationPage";
import PlacesPage from "./pages/PlacesPage";
import EventsPage from "./pages/EventsPage";
import AboutPage from "./pages/AboutPage";
import GetInTouchPage from "./pages/GetInTouchPage";
import NotFound from "./pages/NotFound";
import AddStampPage from "./pages/AddStampPage";
import ManageStampPage from "./pages/ManageStampPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router basename="/">
      <div className="app">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/persons" element={<PersonsPage />} />
          <Route path="/transportation" element={<TransportationPage />} />
          <Route path="/places" element={<PlacesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/get-in-touch" element={<GetInTouchPage />} />

          {/* Admin login page */}
          <Route path="/admin" element={<AdminLoginPage />} />

          {/*Admin dashboard (protected) */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboardPage />
              </ProtectedRoute>
            }
          />

          {/* Protected admin features */}
          <Route
            path="/add-stamp"
            element={
              <ProtectedRoute>
                <AddStampPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manage-stamp"
            element={
              <ProtectedRoute>
                <ManageStampPage />
              </ProtectedRoute>
            }
          />

          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

