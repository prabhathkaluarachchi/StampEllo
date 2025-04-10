import React, { useState } from "react";
import axios from "axios";

const StampForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    description: "",
    country: "",
    value: "",
    category: "Events", // Default to 'Events'
  });
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");

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
      setMessage("Please upload an image.");
      return;
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => data.append(key, val));
    data.append("image", imageFile);

    try {
      await axios.post("https://stampello.onrender.com/api/stamps/add", data);
      setMessage("Stamp uploaded successfully!");
      setFormData({
        title: "",
        year: "",
        description: "",
        country: "",
        value: "",
        category: "",
      });
      setImageFile(null);
    } catch (err) {
      console.error(err);
      setMessage("Error uploading stamp.");
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

        {/* Image Upload */}
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
        {message && <p className="status-msg">{message}</p>}
      </form>
    </div>
  );
};

export default StampForm;











// import React, { useState } from "react";
// import axios from "axios";

// const StampForm = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     year: "",
//     description: "",
//     country: "",
//     value: "",
//     category: "Events", // Default to 'Events'
//   });
//   const [imageFile, setImageFile] = useState(null);
//   const [message, setMessage] = useState("");
//   const [uploadedImageUrl, setUploadedImageUrl] = useState(""); // Store the uploaded image URL

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     setImageFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!imageFile) {
//       setMessage("Please upload an image.");
//       return;
//     }

//     // Step 1: Prepare form data for the backend
//     const data = new FormData();
//     data.append("title", formData.title);
//     data.append("year", formData.year);
//     data.append("description", formData.description);
//     data.append("country", formData.country);
//     data.append("value", formData.value);
//     data.append("category", formData.category);
//     data.append("image", imageFile); // Send the image file

//     try {
//       // Step 2: Send the data to your backend
//       const response = await axios.post("https://stampello.onrender.com/api/stamps/add", data);

//       setMessage("Stamp uploaded successfully!");

//       // Optionally store the uploaded image URL
//       const uploadedStamp = response.data.stamp;
//       setUploadedImageUrl(uploadedStamp.image); // Set the uploaded image URL

//       // Reset form after successful upload
//       setFormData({
//         title: "",
//         year: "",
//         description: "",
//         country: "",
//         value: "",
//         category: "Events", // Default back to 'Events'
//       });
//       setImageFile(null);
//     } catch (err) {
//       console.error(err);
//       setMessage("Error uploading stamp.");
//     }
//   };

//   return (
//     <div className="add-stamp-form-container">
//       <h2 className="text-center mt-4 mb-3">Add New Stamp</h2>
//       <form onSubmit={handleSubmit} className="stamp-form">
//         <div className="form-group">
//           <label>Category</label>
//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//           >
//             <option value="Events">Events</option>
//             <option value="Persons">Persons</option>
//             <option value="Places">Places</option>
//             <option value="Transportation">Transportation</option>
//           </select>
//         </div>

//         <input
//           name="title"
//           type="text"
//           placeholder="Title"
//           value={formData.title}
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="year"
//           type="text"
//           placeholder="Year"
//           value={formData.year}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="description"
//           placeholder="Description"
//           value={formData.description}
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="country"
//           type="text"
//           placeholder="Country"
//           value={formData.country}
//           onChange={handleChange}
//           required
//         />
//         <input
//           name="value"
//           type="text"
//           placeholder="Value (e.g. $100)"
//           value={formData.value}
//           onChange={handleChange}
//           required
//         />

//         {/* Image Upload */}
//         <div className="form-group">
//           <label>Upload Stamp Image</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             required
//           />
//         </div>

//         <button type="submit">Add Stamp</button>
//         {message && <p className="status-msg">{message}</p>}

//         {/* Display the uploaded image after successful upload */}
//         {uploadedImageUrl && (
//           <div>
//             <h3>Uploaded Stamp:</h3>
//             <img src={uploadedImageUrl} alt="Uploaded Stamp" style={{ maxWidth: "300px", marginTop: "10px" }} />
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default StampForm;






