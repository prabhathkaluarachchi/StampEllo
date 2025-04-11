// pages/AdminDashboardPage.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdminDashboard from "../components/AdminDashboard"; // ✅ import the new component

const AdminDashboardPage = () => {
  return (
    <>
      <Navbar />
      <AdminDashboard /> {/* ✅ use the component here */}
      <Footer />
    </>
  );
};

export default AdminDashboardPage;
