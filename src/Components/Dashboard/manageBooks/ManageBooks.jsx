
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
    <section className="py-1 bg-blueGray-50">
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-xl uppercase">
                  All Listed Books
                </h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              </div>
            </div>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 text-xl bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    SN
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Book Title
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Category
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Price
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {books &&
                  books.map((book, index) => (
                    <tr key={index}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {index + 1}
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 ">
                        {book.title}
                      </td>
                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-md whitespace-nowrap p-4">
                        {book.category}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4">
                        ${book.newPrice}
                      </td>
                      <td className="border-t-0 px-6 flex items-center align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 space-x-4">
                        <Link
                          to={`/dashboard/edit-book/${book._id}`}
                          className="font-medium text-green-700 hover:text-indigo-700 mr-2 hover:underline underline-offset-2"
                        >
                          <FaEdit className="size-6 "></FaEdit>
                        </Link>
                        <button
                          onClick={() => handleDeleteBook(book._id)}
                          className="font-medium py-1 px-4 rounded-full  mr-2"
                        >
                         <MdDelete className="size-6 text-red-700 hover:text-red-900"  />
                        </button>
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
