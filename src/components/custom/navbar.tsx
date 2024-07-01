function Navbar() {
  return (
    <header className="bg-[#1E232E] sticky top-0">
      <div className="container backdrop-blur-sm">
        <div className="py-4 md:py-6">
          <img src="/logo.png" alt="" className="h-5 md:h-12" />
          <nav>{/* Links or other content */}</nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
