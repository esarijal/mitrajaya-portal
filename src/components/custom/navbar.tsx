import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-[#1E232E] sticky top-0 z-50">
      <div className="container backdrop-blur-sm">
        <div className="py-4 md:py-6">
          <Link to="/" className="flex items-center gap-2 w-fit">
            <img src="/logo-1.png" alt="" className="h-5 md:h-12" />
            <h1 className="flex flex-col text-lg font-bold leading-tight uppercase text-start text-[#eab723]">
              Mitra Jaya{" "}
              <span className="text-xs font-semibold text-[#e4cc4c]">
                PORTAL
              </span>
            </h1>
          </Link>
          {/* <nav>Links or other content</nav> */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
