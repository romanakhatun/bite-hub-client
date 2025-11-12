import { Link } from "react-router";
import { StarRating } from "./StarRating";

const ReviewCard = ({ review }) => {
  return (
    <div className="card-common text-center hover:-translate-y-1">
      <div className="mx-auto w-full max-w-[200px] mb-6">
        <div className="relative overflow-hidden aspect-square border-[7px] border-[#dfdfdf]">
          <img
            src={review.foodImage}
            alt={review.foodName}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      <h3 className="text-2xl font-garamond font-medium text-base-content mb-3">
        {review.foodName}
      </h3>

      <p className="text-sm text-gray-500 font-semibold mb-1">
        {review.restaurantName} &bull; {review.location}
      </p>

      <p className="text-xs text-primary mb-3 italic">
        Reviewed by {review.reviewer}
      </p>

      <div className="flex justify-center mb-6">
        <StarRating rating={review.rating} />
      </div>

      <Link
        to={`/review/${review._id}`}
        className="btn-primary border border-primary px-6 py-2"
      >
        View Details
      </Link>
    </div>
  );
};

export default ReviewCard;
