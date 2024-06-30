function Navbar() {
  return (
    <header className="container sticky top-0 bg-[#1E232E]/80 backdrop-blur-sm">
      <div className="sticky top-0 py-4 md:py-6">
        <img src="/logo.png" alt="" className="h-5 md:h-12" />
        <nav>{/* Links or other content */}</nav>
      </div>
    </header>
  );
}

export default Navbar;
