import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="w-full bg-yellow-400 mb-1.5">
      <div className="px-6 flex justify-between py-2 h-16 items-center">
        {/* left side */}
        <div className="flex gap-4">
          <Link to="/">
          <img className="size-14 rounded-full" src={logo} alt="" />
          </Link>
          <div className="flex items-center gap-2">
            <IoSearchOutline/>
            <input type="text" name="" className="bg-[#EAEAEA] w-full" placeholder="Search here..." />
          </div>
        </div>
        {/* right side */}
        <div> 
          <h1>Right</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;