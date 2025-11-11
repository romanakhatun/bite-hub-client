import ReviewCard from "../../components/ReviewCard";

// --- Dummy Data  ---
const featuredReviewsData = [
  {
    id: 1,
    image:
      "https://www.themetechmount.com/bitehub/wp-content/uploads/2024/04/foodmenu-01.jpg",
    foodName: "Coconut Fish Curry",
    restaurant: "The Spice Market",
    location: "Downtown, NYC",
    reviewer: "Anya Sharma",
    rating: 4.5,
  },
  {
    id: 2,
    image:
      "https://www.themetechmount.com/bitehub/wp-content/uploads/2024/04/foodmenu-01.jpg",
    foodName: "Delicious Biryani",
    restaurant: "Bombay Bistro",
    location: "Midtown, NYC",
    reviewer: "Mark Chen",
    rating: 5.0,
  },
  {
    id: 3,
    image:
      "https://www.themetechmount.com/bitehub/wp-content/uploads/2024/04/foodmenu-01.jpg",
    foodName: "Classic Butter Chicken",
    restaurant: "Punjabi Grill",
    location: "Uptown, NYC",
    reviewer: "Jessica Lee",
    rating: 4.2,
  },
  {
    id: 4,
    image:
      "https://www.themetechmount.com/bitehub/wp-content/uploads/2024/04/foodmenu-01.jpg",
    foodName: "Classic Butter Chicken",
    restaurant: "Punjabi Grill",
    location: "Uptown, NYC",
    reviewer: "Jessica Lee",
    rating: 4.2,
  },
];

const FeaturedReviews = () => {
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
          {featuredReviewsData.map((review) => (
            <ReviewCard review={review} key={review.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedReviews;
