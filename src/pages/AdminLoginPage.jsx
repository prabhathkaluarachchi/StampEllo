// pages/AdminLoginPage.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdminLogin from "../components/AdminLogin";
import ScrollToTop from "../components/ScrollToTop"; 

const AdminLoginPage = () => {
  return (
    <>
      <Navbar />
      <AdminLogin />
      <ScrollToTop /> 
      <Footer />
    </>
  );
};

export default AdminLoginPage;
