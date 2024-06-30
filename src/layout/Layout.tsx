import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-[#1E232E]">
      <Navbar />
      <main className="min-h-screen container bg-[#1E232E] pb-[90px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
