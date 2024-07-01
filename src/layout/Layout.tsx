import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  // get link
  const url = window.location;

  return (
    <div className="bg-[#1E232E]">
      <Navbar />
      <main
        className={`min-h-screen ${
          url.pathname.includes("/detail-berita") ? "bg-white" : "bg-[#1E232E] "
        }`}
      >
        <div className="container pb-[90px]">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
