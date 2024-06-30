import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-[#1E232E]">
      <Navbar />
      <main className="min-h-screen bg-[#1E232E]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
