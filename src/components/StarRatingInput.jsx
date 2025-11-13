import { FaStar } from "react-icons/fa";

export const StarRatingInput = ({ rating, setRating }) => (
  <div className="flex justify-start gap-1">
    {[...Array(5)].map((star, index) => {
      const ratingValue = index + 1;
      return (
        <label key={index}>
          <input
            type="radio"
            name="rating"
            value={ratingValue}
            onClick={() => setRating(ratingValue)}
            className="hidden"
            defaultChecked={ratingValue === rating}
          />
          <FaStar
            className="cursor-pointer transition-colors duration-200"
            color={ratingValue <= rating ? "#ffd156" : "#e4e5e9"}
            size={30}
          />
        </label>
      );
    })}
    <span className="ml-3 text-lg font-bold text-gray-700">
      {rating > 0 ? `${rating}.0 / 5.0` : ""}
    </span>
  </div>
);
