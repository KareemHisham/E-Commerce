import { Footer, Navbar, Sidebar } from "./Index";
import { Outlet } from "react-router-dom";
const MyRoutes = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MyRoutes;
