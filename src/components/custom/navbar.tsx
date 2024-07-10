import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-[#1E232E] sticky top-0 z-50">
      <div className="container backdrop-blur-sm">
        <div className="py-4 md:py-6">
          <Link to="/" className="flex items-center gap-2 w-fit">
            <h1 className="flex flex-col text-lg font-bold leading-tight uppercase text-start text-[#eab723]">
              B E D A S U D U T P A N D A N G . I D
            </h1>
          </Link>
          {/* <nav>Links or other content</nav> */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
