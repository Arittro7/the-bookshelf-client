import { Link, Outlet, useNavigate } from "react-router-dom";
import { MdLogout} from "react-icons/md";
import adminImg from '../../assets/adminImg.png'
import logo from '../../assets/logo.png'
import { BsBarChart } from "react-icons/bs";
import { FaRegAddressBook } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <section className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
  {/* Sidebar */}
  <aside className="hidden sm:flex sm:flex-col w-full sm:w-20 lg:w-24 bg-gray-800">
    <a href="/" className="flex items-center justify-center h-20">
      <img src={logo} className="w-12 h-12" />
    </a>
    <div className="flex-grow flex flex-col justify-between text-gray-500">
      <nav className="flex flex-col items-center space-y-4 py-4">
        <Link to="/dashboard" className="p-3 text-yellow-400 hover:text-green-500 rounded-lg">
          <BsBarChart className="w-6 h-6" />
        </Link>
        <Link to="/dashboard/add-new-book" className="p-3 text-yellow-400 hover:text-green-500 rounded-lg">
          <FaRegAddressBook className="w-6 h-6" />
        </Link>
        <Link to="/dashboard/manage-books" className="p-3 text-yellow-400 hover:text-green-500 rounded-lg">
          <CiBoxList className="w-6 h-6" />
        </Link>
      </nav>
      <div className="flex justify-center items-center h-20 border-t border-gray-700">
        <button className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M10.325 4.317c.426-1.756...z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </div>
  </aside>

  {/* Main Content */}
  <div className="flex-grow text-gray-800">
    {/* Header */}
    <header className="flex items-center justify-between h-16 px-4 sm:px-6 bg-white shadow-sm">
      {/* Menu Button on Mobile */}
      <button className="sm:hidden p-2 rounded-full text-gray-600 hover:bg-gray-100">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </button>

      {/* Search Input */}
      <div className="relative flex-grow max-w-md mx-2">
        <svg className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8...z" clipRule="evenodd" />
        </svg>
        <input type="text" role="search" placeholder="Search..."
          className="w-full py-2 pl-10 pr-4 border placeholder-gray-400 bg-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex flex-col text-right leading-tight">
          <span className="font-semibold">N.A. Arittro</span>
          <span className="text-sm text-gray-600">Admin</span>
        </div>
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gray-200">
          <img src={adminImg} alt="Admin" className="w-full h-full object-cover" />
        </div>
        {/* Notification and Logout */}
        <div className="flex items-center space-x-2">
          <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 rounded-full">
            <span className="sr-only">Notifications</span>
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-ping"></span>
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 17h5...m6 0H9" />
            </svg>
          </button>
          <button onClick={handleLogout} className="p-2 text-gray-400 hover:bg-gray-100 hover:text-red-600 rounded-full">
            <MdLogout className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>

    {/* Dashboard Main Section */}
    <main className="p-4 sm:p-6 lg:p-10 space-y-6">
      {/* Title + Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Dashboard</h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/dashboard/manage-books"
            className="px-4 py-2 bg-yellow-400 hover:bg-green-500 text-sm font-semibold rounded-md text-center">
            Update Books
          </Link>
          <Link to="/dashboard/add-new-book"
            className="px-4 py-2 bg-yellow-400 hover:bg-green-500 text-sm font-semibold rounded-md text-center">
            Add New Book
          </Link>
        </div>
      </div>

      {/* Dynamic Outlet Content */}
      <Outlet />
    </main>
  </div>
</section>

  );
};

export default DashboardLayout;
