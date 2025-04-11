// src/components/ManageStamps.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageStamps = () => {
  const [category, setCategory] = useState("Events");
  const [stamps, setStamps] = useState([]);
  const [editStamp, setEditStamp] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    description: "",
    country: "",
    value: "",
  });

  const fetchStamps = async () => {
    try {
      const res = await axios.get(
        `https://stampello.onrender.com/api/stamps?category=${category}`
      );
      setStamps(res.data);
    } catch (err) {
      console.error("Error fetching stamps:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://stampello.onrender.com/api/stamps/${id}`);
      fetchStamps(); // Refresh the list
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleEdit = (stamp) => {
    setEditStamp(stamp._id);
    setFormData({
      title: stamp.title,
      year: stamp.year,
      description: stamp.description,
      country: stamp.country,
      value: stamp.value,
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `https://stampello.onrender.com/api/stamps/${editStamp}`,
        formData
      );
      setEditStamp(null);
      fetchStamps(); // Refresh list
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="manage-stamps">
      <h2 className="text-center mt-4 mb-3">Manage Stamps</h2>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-3"
      >
        <option value="Events">Events</option>
        <option value="Persons">Persons</option>
        <option value="Places">Places</option>
        <option value="Transportation">Transportation</option>
      </select>
      <button onClick={fetchStamps}>Load Stamps</button>

      <ul className="stamp-list">
        {stamps.map((stamp) => (
          <li key={stamp._id} className="mt-2">
            {editStamp === stamp._id ? (
              <div>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title"
                />
                <input
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  placeholder="Year"
                />
                <input
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                />
                <input
                  name="value"
                  value={formData.value}
                  onChange={handleChange}
                  placeholder="Value"
                />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                />
                <button onClick={handleUpdate}>Save</button>
                <button onClick={() => setEditStamp(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <strong>{stamp.title}</strong>
                <button onClick={() => handleEdit(stamp)}>Update</button>
                <button onClick={() => handleDelete(stamp._id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageStamps;
