import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Auto logout logic
  useEffect(() => {
    const logout = () => {
      Swal.fire({
        title: "Session Expired",
        text: "You have been logged out due to inactivity.",
        icon: "warning",
        confirmButtonText: "OK"
      }).then(() => {
        localStorage.removeItem("isAdmin");
        navigate("/admin");
      });
    };

    let timer = setTimeout(logout, 3 * 60 * 1000); 

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(logout, 3 * 60 * 1000);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
    };
  }, [navigate]);

  // Manual logout logic
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Logout"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("isAdmin");
        navigate("/admin");
      }
    });
  };

  return (
    <div className="admin common">
      <h2>Admin Dashboard</h2>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button onClick={() => navigate("/add-stamp")}>➕ Add Stamp</button>
        <button onClick={() => navigate("/manage-stamp")}>🛠️ Manage Stamps</button>
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => navigate("/")}>← Return to Home</button>
        <button onClick={handleLogout}>🔓 Logout</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
