import { useEffect, useState } from "react";
import ReviewCard from "../../components/ReviewCard";
import useAxios from "../../hooks/useAxios";

const FeaturedReviews = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance
      .get("/featured-reviews")
      .then((data) => {
        console.log(data.data);
        setReviewsData(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [axiosInstance]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading font-garamond text-primary">
          Featured Reviews
        </h2>
        <p className="section-text mb-12">
          See what the community is raving about. Honest opinions and delicious
          discoveries near you.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {reviewsData.map((review, index) => (
            <ReviewCard review={review} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedReviews;
