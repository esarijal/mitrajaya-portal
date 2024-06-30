import { NavLink } from "react-router-dom";

function NewsCategoryNav() {
  return (
    <nav className="flex gap-5 px-4 py-5 overflow-x-auto text-sm border-y text-primary md:text-base md:gap-10 whitespace-nowrap md:px-0">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-active font-bold" : "")}
      >
        Berita Terkini
      </NavLink>
      <NavLink
        to="/daerah"
        className={({ isActive }) => (isActive ? "text-active font-bold" : "")}
      >
        Berita Daerah
      </NavLink>
      <NavLink
        to="/anti-hoax"
        className={({ isActive }) => (isActive ? "text-active font-bold" : "")}
      >
        Anti Hoax
      </NavLink>
      <NavLink
        to="/orang-hilang"
        className={({ isActive }) => (isActive ? "text-active font-bold" : "")}
      >
        Daftar Pencarian Orang
      </NavLink>
    </nav>
  );
}

export default NewsCategoryNav;
