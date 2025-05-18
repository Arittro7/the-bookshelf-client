import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import { RiBookShelfFill } from "react-icons/ri";
import user from "../../assets/user.png";
import { useState } from "react";

const navbarDropdown = [
  { name: "Dashboard", Link: "/dashboard" },
  { name: "Orders", Link: "/orders" },
  { name: "Cart", Link: "/cart" },
  { name: "Check Out", Link: "/checkout" },
];

const Navbar = () => {
  const currentUser = false;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full mb-1.5 ">
      <div className="px-6 flex justify-between py-2 h-16 items-center">
        {/* left side */}
        <div className=" flex gap-4 ">
          <Link to="/">
            <img className="size-14 rounded-full" src={logo} alt="" />
          </Link>
          <div className=" relative flex items-center gap-2">
            <IoSearchOutline className="absolute left-2" />
            <input
              type="text"
              name=""
              className="bg-[#EAEAEA] md:w-full w-[120px] px-8 py-1 rounded-lg"
              placeholder="Search here..."
            />
          </div>
        </div>
        {/* right side */}
        <div className="flex gap-3 items-center">
          <button className="hidden sm:block">
            <FiBookmark className="size-6" />
          </button>
          <div className="relative">
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={user}
                    className={`size-6 ${
                      currentUser
                        ? "ring-2 ring-yellow-400 rounded-full mt-1.5"
                        : ""
                    } `}
                  />
                </button>
                {/* dropdown */}
                {isDropdownOpen && (
                  <div className="absolute z-10 bg-yellow-400 py-2 px-4 rounded-md top-10 md:-left-1 -left-8">
                    <ul>
                      {navbarDropdown.map((item) => (
                        <li
                          key={item.name}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <button>
                            <Link to={item.Link}>
                              <div className="uppercase font-semibold hover:border-b-2">
                                {item.name}
                              </div>
                            </Link>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to={"/login"}>
                <FaUser className="size-6" />
              </Link>
            )}
          </div>

          <Link
            to="/cart"
            className="flex gap-2 items-center rounded-md bg-yellow-400 md:px-6 md:py-1 py-1 px-2"
          >
            <RiBookShelfFill className="size-7" />
            <span className="text-xl">0</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
