import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "admin123") {
      Swal.fire({
        title: 'Login Successful!',
        text: 'Welcome, Admin!',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Continue'
      }).then(() => {
        localStorage.setItem("isAdmin", "true");
        navigate("/admin/dashboard");
      });
    } else {
      Swal.fire({
        title: 'Access Denied',
        text: 'Incorrect password. Try again!',
        icon: 'error',
        confirmButtonColor: '#d33',
        confirmButtonText: 'Retry'
      });
    }
  };
  

  return (
    <div className="admin common">
      <h2>Admin Login</h2>
      <input
        type="password"
        placeholder="Enter admin password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
