import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";

const Root = () => {
  return (
    <div className=" font-Raleway">
      <Navbar></Navbar>
      {/* //note: will change if needed --> min-h-[calc(100vh-306px)] */}
      <div className="min-h-screen w-full px-7"> 
        <Outlet></Outlet>
      </div>
      {/* Footer */}
    </div>
  );
};

export default Root;
