// pages/AdminLoginPage.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdminLogin from "../components/AdminLogin"; // ✅ import the reusable component

const AdminLoginPage = () => {
  return (
    <>
      <Navbar />
      <AdminLogin /> {/* ✅ use the reusable component here */}
      <Footer />
    </>
  );
};

export default AdminLoginPage;
