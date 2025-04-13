import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminLogin = () => {
  const [passwordInput, setPasswordInput] = useState("");
  const [adminDetails, setAdminDetails] = useState(null);
  const navigate = useNavigate();

  // Fetch admin details from the backend
  useEffect(() => {
    fetch("https://stampello.onrender.com/api/admin/details")
      .then((res) => res.json())
      .then((data) => {
        if (data.password) {
          setAdminDetails(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching admin details:", error);
        Swal.fire("Error", "Failed to fetch admin credentials", "error");
      });
  }, []);

  const handleLogin = () => {
    if (passwordInput === adminDetails?.password) {
      Swal.fire({
        title: "Login Successful!",
        text: "Welcome, Admin!",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Continue",
      }).then(() => {
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem("loginTime", Date.now());
        navigate("/admin/dashboard");
      });
    } else {
      Swal.fire({
        title: "Access Denied",
        text: "Incorrect password. Try again!",
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "Retry",
      });
    }
  };

  return (
    <div className="admin common">
      <h2>Admin Login</h2>
      <input
        type="password"
        placeholder="Enter admin password"
        value={passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;

