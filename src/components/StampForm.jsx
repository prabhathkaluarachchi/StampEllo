import React, { useState } from "react";
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
          marginTop: "20px",
        }}
      >
        <button
          onClick={() => navigate("/manage-stamp")}
          className="btn btn-secondary"
        >
          Go to Manage Stamps
        </button>
      </div>
    </div>
  );
};

export default StampForm;
