import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const PublicLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-white max-w-[1200px] mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PublicLayout;
