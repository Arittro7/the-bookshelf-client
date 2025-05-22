
import { Link, useNavigate } from "react-router-dom";
import { useDeleteBookMutation, useFetchAllBooksQuery } from "../../../redux/Features/Books/booksAPI";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ManageBooks = () => {
  const navigate = useNavigate();

  const { data: books, refetch } = useFetchAllBooksQuery();

  const [deleteBook] = useDeleteBookMutation();

  // Handle deleting a book
  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id).unwrap();
      alert("Book deleted successfully!");
      refetch();
    } catch (error) {
      console.error("Failed to delete book:", error.message);
      alert("Failed to delete book. Please try again.");
    }
  };

  // Handle navigating to Edit Book page
  const handleEditClick = (id) => {
    navigate(`dashboard/edit-book/${id}`);
  };
  return (
    <section className="py-6 bg-gray-50">
  <div className="w-full xl:w-10/12 px-4 mx-auto mt-12">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b">
        <h3 className="text-xl font-semibold uppercase text-gray-800">All Listed Books</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto text-left text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold uppercase">SN</th>
              <th className="px-4 py-3 text-sm font-semibold uppercase">Book Title</th>
              <th className="px-4 py-3 text-sm font-semibold uppercase">Category</th>
              <th className="px-4 py-3 text-sm font-semibold uppercase">Price</th>
              <th className="px-4 py-3 text-sm font-semibold uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books?.map((book, index) => (
              <tr key={book._id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{book.title}</td>
                <td className="px-4 py-3">{book.category}</td>
                <td className="px-4 py-3">${book.newPrice}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-4">
                    <Link
                      to={`/dashboard/edit-book/${book._id}`}
                      className="text-green-600 hover:text-indigo-600 transition"
                    >
                      <FaEdit className="w-5 h-5" />
                    </Link>
                    <button
                      onClick={() => handleDeleteBook(book._id)}
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      <MdDelete className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

  );
};

export default ManageBooks;
