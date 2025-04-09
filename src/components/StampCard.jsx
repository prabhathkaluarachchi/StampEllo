
// StampCard.jsx
import '../index.css';

const StampCard = ({ stamp }) => {
  if (!stamp) return null;
  const imageUrl = `http://localhost:5000${stamp.image}`;  // Combine the server URL and image path

  return (
    <div className="stamp-item">
      <div className="stamp-img-container">
        <img src={imageUrl} alt={stamp.title} className="stamp-img" />
      </div>
      <div className="stamp-details">
        <h3 className="stamp-title">{stamp.title}</h3>
        <p className="stamp-year">📅 {stamp.year}</p>
        <p className="stamp-description">{stamp.description}</p>
        <div className="stamp-meta">
          <span className="stamp-country">🌍 {stamp.country}</span>
          <span className="stamp-value">💰 {stamp.value}</span>
        </div>
      </div>
    </div>
  );
};

export default StampCard;






















// // StampCard.jsx
// import '../index.css';

// const StampCard = ({ stamp }) => {
//   if (!stamp) return null;

//   return (
//     <div className="stamp-item">
//       <div className="stamp-img-container">
//         <img src={stamp.image} alt={stamp.title} className="stamp-img" />
//       </div>
//       <div className="stamp-details">
//         <h3 className="stamp-title">{stamp.title}</h3>
//         <p className="stamp-year">📅 {stamp.year}</p>
//         <p className="stamp-description">{stamp.description}</p>
//         <div className="stamp-meta">
//           <span className="stamp-country">🌍 {stamp.country}</span>
//           <span className="stamp-value">💰 {stamp.value}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StampCard;

