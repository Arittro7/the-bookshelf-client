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
  <aside className="w-full md:w-20 lg:w-24 bg-gray-800 flex md:flex-col items-center md:items-stretch md:justify-between text-gray-500 py-2 md:py-4">
    {/* Logo */}
    <a href="/" className="h-16 flex justify-center items-center">
      <img src={logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12" />
    </a>

    {/* Nav Links */}
    <nav className="flex md:flex-col md:items-center gap-4 md:gap-6 px-4 md:px-0">
      <Link to="/dashboard" className="p-2 text-yellow-400 hover:text-green-500">
        <BsBarChart className="w-6 h-6" />
      </Link>
      <Link to="/dashboard/add-new-book" className="p-2 text-yellow-400 hover:text-green-500">
        <FaRegAddressBook className="w-6 h-6" />
      </Link>
      <Link to="/dashboard/manage-books" className="p-2 text-yellow-400 hover:text-green-500">
        <CiBoxList className="w-6 h-6" />
      </Link>
    </nav>

    {/* Settings */}
    <div className="hidden md:flex justify-center items-center h-16 border-t border-gray-700">
      <button className="p-2 hover:text-gray-400 hover:bg-gray-700 rounded-full">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317..." />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
    </div>
  </aside>

  {/* Main Content */}
  <div className="flex-1 flex flex-col">
    {/* Header */}
    <header className="flex items-center justify-between h-16 px-4 sm:px-6 bg-white shadow-sm">
      {/* Mobile Menu */}
      {/* <button className="md:hidden p-2 rounded-full text-gray-600 hover:bg-gray-100">
        
      </button> */}

      {/* Search */}
      <div className="relative w-full max-w-xs sm:max-w-md mx-2">
        <svg className="absolute h-5 w-5 left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8..." clipRule="evenodd" />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 pl-10 pr-4 text-sm border rounded-lg bg-gray-50 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex flex-col text-right">
          <span className="font-semibold text-sm">N.A. Arittro</span>
          <span className="text-xs text-gray-600">Admin</span>
        </div>
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gray-200">
          <img src={adminImg} alt="Admin" className="object-cover w-full h-full" />
        </div>
        {/* Notification + Logout */}
        <div className="flex items-center gap-2">
          <button className="relative p-2 text-gray-400 hover:bg-gray-100 rounded-full">
            <span className="sr-only">Notifications</span>
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-ping"></span>
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5..." />
            </svg>
          </button>
          <button onClick={handleLogout} className="p-2 text-gray-400 hover:text-red-600 hover:bg-gray-100 rounded-full">
            <MdLogout className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>

    {/* Main Dashboard Content */}
    <main className="flex-1 p-4 sm:p-6 lg:p-10 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Dashboard</h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/dashboard/manage-books"
            className="px-4 py-2 bg-yellow-400 hover:bg-green-500 text-sm font-semibold rounded-md text-center"
          >
            Update Books
          </Link>
          <Link
            to="/dashboard/add-new-book"
            className="px-4 py-2 bg-yellow-400 hover:bg-green-500 text-sm font-semibold rounded-md text-center"
          >
            Add New Book
          </Link>
        </div>
      </div>

      {/* Dynamic routed content */}
      <Outlet />
    </main>
  </div>
</section>


  );
};

export default DashboardLayout;
