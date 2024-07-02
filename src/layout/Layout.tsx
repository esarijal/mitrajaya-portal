import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useMemo } from "react";

function Layout() {
  const location = useLocation();

  const darkBg = useMemo(() => {
    return !location.pathname.includes("/detail-berita");
  }, [location.pathname]);

  return (
    <div className="bg-[#1E232E]">
      <Navbar />
      <main className={`min-h-screen ${darkBg ? "bg-[#1E232E]" : "bg-white"}`}>
        <div className="container pb-[90px]">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
