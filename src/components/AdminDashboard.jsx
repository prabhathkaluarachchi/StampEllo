import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="admin common">
      <h2>Admin Dashboard</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => navigate("/add-stamp")}>➕ Add Stamp</button>
        <button onClick={() => navigate("/manage-stamp")}>🛠️ Manage Stamps</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
