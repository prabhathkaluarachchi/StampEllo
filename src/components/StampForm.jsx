import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const StampForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    year: "",
    description: "",
    country: "",
    value: "",
    category: "Events",
  });
  const [imageFile, setImageFile] = useState(null);

  // Auto logout logic
  useEffect(() => {
    const logout = () => {
      Swal.fire({
        title: "Session Expired",
        text: "You have been logged out due to inactivity.",
        icon: "warning",
        confirmButtonText: "OK",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      Swal.fire("Image Missing", "Please upload an image.", "warning");
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => data.append(key, val));
    data.append("image", imageFile);

    try {
      await axios.post("https://stampello.onrender.com/api/stamps/add", data);
      Swal.fire("Success", "Stamp uploaded successfully!", "success");
      setFormData({
        title: "",
        year: "",
        description: "",
        country: "",
        value: "",
        category: "Events",
      });
      setImageFile(null);
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Error uploading stamp. Please try again.", "error");
    }
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("isAdmin");
        navigate("/admin");
      }
    });
  };

  return (
    <div className="add-stamp-form-container">
      <h2 className="text-center mt-4 mb-3">Add New Stamp</h2>
      <form onSubmit={handleSubmit} className="stamp-form">
        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Events">Events</option>
            <option value="Persons">Persons</option>
            <option value="Places">Places</option>
            <option value="Transportation">Transportation</option>
          </select>
        </div>

        <input
          name="title"
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          name="year"
          type="text"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          name="country"
          type="text"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
        />
        <input
          name="value"
          type="text"
          placeholder="Value (e.g. $100)"
          value={formData.value}
          onChange={handleChange}
          required
        />

        <div className="form-group">
          <label>Upload Stamp Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        <button type="submit">Add Stamp</button>
      </form>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "20px",
        }}
      >
        <button onClick={() => navigate("/admin/dashboard")} className="btn btn-secondary">
          ← Return to Dashboard
        </button>
        <button onClick={handleLogout} className="btn btn-danger">
          🔓 Logout
        </button>
      </div>
    </div>
  );
};

export default StampForm;

