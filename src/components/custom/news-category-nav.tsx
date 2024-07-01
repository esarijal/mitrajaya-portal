import { NavLink } from "react-router-dom";

function NewsCategoryNav() {
  const newsCategory = [
    {
      id: 1,
      name: "Berita Terkini",
    },
    {
      id: 2,
      name: "Berita Daerah",
    },
    {
      id: 3,
      name: "Anti Hoax",
    },
    {
      id: 4,
      name: "Daftar Pencarian Orang",
    },
    {
      id: 5,
      name: "Tindak Kriminal",
    },
  ];

  const createLink = (id: number, name: string) => {
    switch (name) {
      case "Berita Terkini":
        return `/`;
      case "Berita Daerah":
        return `/daerah`;
      default:
        return `/berita/${id}/${name}`;
    }
  };

  return (
    <nav className="flex gap-5 px-4 py-5 overflow-x-auto text-sm border-y text-primary md:text-base md:gap-10 whitespace-nowrap md:px-0">
      {newsCategory.map((category) => (
        <NavLink
          key={category.id}
          to={createLink(category.id, category.name)}
          className={({ isActive }) =>
            isActive ? "text-active font-bold" : ""
          }
        >
          {category.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default NewsCategoryNav;
