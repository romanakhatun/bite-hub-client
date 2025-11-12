import { Link, useLoaderData } from "react-router";
import PageHeader from "../../components/PageHeader";
import { StarRating } from "../../components/StarRating";

const ReviewDetails = () => {
  const review = useLoaderData();
  const {
    foodName,
    foodImage,
    restaurantName,
    location,
    rating,
    reviewText,
    reviewer,
    submissionDate,
  } = review;

  const formattedDate = new Date(submissionDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="border-t border-black">
      <PageHeader title={foodName} currentPath="Review Details" />

      <section className="py-12 md:py-20 container mx-auto px-4">
        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 border-b lg:border-b-0 pb-8">
            <div className="lg:col-span-1">
              <img
                src={foodImage}
                alt={foodName}
                className="w-full h-[400px] rounded-xl shadow-lg object-cover aspect-square"
              />
            </div>

            <div className="lg:col-span-2 flex flex-col justify-center">
              <h1 className="text-4xl font-garamond font-bold text-base-content mb-3">
                {foodName}
              </h1>

              <p className="text-xl font-medium text-gray-700 mb-2">
                <strong>Restaurant Name:</strong> {restaurantName}
              </p>
              <p className="text-xl font-medium text-gray-700 mb-2">
                <strong>Location:</strong> {location}
              </p>

              <div className="flex items-center gap-4 mb-4">
                <StarRating rating={rating} />
                <span className="text-lg font-semibold text-secondary">
                  ({rating.toFixed(1)}/5.0)
                </span>
              </div>

              <hr className="my-3" />

              <p className="text-sm text-gray-600">
                Reviewed by:{" "}
                <span className="font-semibold text-primary">{reviewer}</span>
              </p>
              <p className="text-sm text-gray-600">
                Submitted on: {formattedDate}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-garamond font-medium text-base-content mb-4 border-b pb-2">
              The Reviewer's Verdict
            </h2>
            <p className="text-lg leading-relaxed text-gray-800 mb-3">
              {reviewText}
            </p>

            <Link
              to={`/edit-review/${review.id}`}
              className="btn-primary px-5 py-2 "
            >
              Edit This Review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewDetails;
