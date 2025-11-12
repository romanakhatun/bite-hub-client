import { FaStar } from "react-icons/fa";

// Helper to render stars
export const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FaStar
        key={i}
        className={i < fullStars ? "text-yellow-500" : "text-gray-300"}
      />
    );
  }
  return <div className="flex text-sm gap-0.5">{stars}</div>;
};
