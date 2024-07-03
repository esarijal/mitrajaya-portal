import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-[#1E232E] sticky top-0">
      <div className="container backdrop-blur-sm">
        <div className="py-4 md:py-6">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo-1.png" alt="" className="h-5 md:h-12" />
            <h1 className="flex flex-col text-lg font-bold leading-tight uppercase text-start text-[#3a70bb]">
              Mitra Jaya{" "}
              <span className="text-xs font-semibold text-[#52ace4]">
                Arya Sanika
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
