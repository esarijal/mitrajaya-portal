import { useGetCategories } from "@/hooks/useGetCategories";
import { NavLink } from "react-router-dom";

function NewsCategoryNav() {
  const { data: newsCategory } = useGetCategories();

  const createLink = (id: number, name: string) => {
    switch (name) {
      case "Berita Terkini":
        return `/`;
      case "Berita Daerah":
        return `/daerah/${id}`;
      default:
        return `/berita/${id}/${name}`;
    }
  };

  return (
    newsCategory &&
    newsCategory.length > 0 && (
      <nav className="flex gap-5 px-4 py-5 overflow-x-auto text-sm border-y text-primary md:text-base md:gap-10 whitespace-nowrap md:px-0">
        <NavLink
          to={createLink(0, "Berita Terkini")}
          className={({ isActive }) =>
            isActive ? "text-active font-bold" : ""
          }
        >
          Berita Terkini
        </NavLink>
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
    )
  );
}

export default NewsCategoryNav;
