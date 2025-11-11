import { Link } from "react-router";
import PageHeader from "../../components/PageHeader";
import { FaEdit, FaTrash } from "react-icons/fa";

// --- Dummy Data ---
const userReviews = [
  {
    id: 101,
    image:
      "https://www.themetechmount.com/bitehub/wp-content/uploads/2024/04/foodmenu-01.jpg",
    name: "Spicy Tandoori Pizza",
    restaurant: "Pizza Palace Central",
    date: "2025-11-05",
  },
  {
    id: 102,
    image:
      "https://www.themetechmount.com/bitehub/wp-content/uploads/2024/04/foodmenu-01.jpg",
    name: "Classic Butter Chicken",
    restaurant: "The Punjabi Grill",
    date: "2025-10-28",
  },
  {
    id: 103,
    image:
      "https://www.themetechmount.com/bitehub/wp-content/uploads/2024/04/foodmenu-01.jpg",
    name: "Vegan Power Bowl",
    restaurant: "Green Eats Cafe",
    date: "2025-09-15",
  },
];

const MyReviews = () => {
  const handleEdit = (id) => {
    console.log(`Editing review ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Deleting review ID: ${id}`);
  };

  return (
    <div className="border-t border-black">
      <PageHeader title="My Reviews" currentPath="My Reviews" />

      <section className="py-12 md:py-20 px-4 md:px-8 container mx-auto">
        <h2 className="text-3xl font-garamond font-semibold text-base-content mb-6">
          Your Contributions ({userReviews.length})
        </h2>

        <div className="overflow-x-auto shadow-xl rounded-xl">
          <table className="table w-full">
            {/* Table Head */}
            <thead>
              <tr className="bg-neutral text-white">
                <th>Image</th>
                <th>Name</th>
                <th className="hidden sm:table-cell">Restaurant</th>
                <th className="hidden md:table-cell">Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {userReviews.map((review) => (
                <tr
                  key={review.id}
                  className="hover:bg-gray-50 border-b border-gray-200"
                >
                  {/* Image */}
                  <td>
                    <div className="avatar">
                      <div className="w-12 h-12 rounded-lg">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </td>

                  {/*  Name & Restaurant  */}
                  <td>
                    <Link
                      to={`/reviews/${review.id}`}
                      className="font-semibold text-base-content hover:text-primary"
                    >
                      {review.name}
                    </Link>
                    <span className="block text-xs text-gray-500 sm:hidden">
                      @{review.restaurant}
                    </span>
                  </td>

                  {/* Restaurant Hidden on small screens */}
                  <td className="hidden sm:table-cell text-gray-700">
                    {review.restaurant}
                  </td>

                  {/* Date (Hidden on medium screens) */}
                  <td className="hidden md:table-cell text-sm text-gray-500">
                    {review.date}
                  </td>

                  {/* Edit Button */}
                  <td>
                    <button
                      onClick={() => handleEdit(review.id)}
                      className="cursor-pointer text-secondary hover:text-secondary-focus"
                      title="Edit Review"
                    >
                      <FaEdit size={16} />
                    </button>
                  </td>

                  {/* Delete Button */}
                  <td>
                    <button
                      onClick={() => handleDelete(review.id)}
                      className="cursor-pointer text-red-500 hover:text-red-700"
                      title="Delete Review"
                    >
                      <FaTrash size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default MyReviews;
