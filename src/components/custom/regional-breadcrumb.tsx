import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type PathTitle = {
  region: "province" | "city" | "district" | "subdistrict" | "news";
  title: string;
};

function RegionalBreadcrumb({
  color = "primary",
}: {
  color?: "primary" | "secondary";
}) {
  const {
    id,
    prov_name,
    city_name,
    district_name,
    subdistrict_name,
    news_title,
    prov_id,
    city_id,
    district_id,
    subdistrict_id,
  } = useParams();

  const [pathTitle, setPathTitle] = useState<PathTitle[]>([]);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const titles: PathTitle[] = [];

    if (prov_name) titles.push({ region: "province", title: prov_name });
    if (city_name) titles.push({ region: "city", title: city_name });
    if (district_name)
      titles.push({ region: "district", title: district_name });
    if (subdistrict_name)
      titles.push({ region: "subdistrict", title: subdistrict_name });
    if (news_title) titles.push({ region: "news", title: news_title });

    setPathTitle(titles);
  }, [prov_name, city_name, district_name, subdistrict_name, news_title]);

  const createUrl = (region: PathTitle["region"]) => {
    switch (region) {
      case "province":
        return `/daerah/${id}/${prov_id}/${prov_name}`;
      case "city":
        return `/daerah/${id}/${prov_id}/${prov_name}/${city_id}/${city_name}`;
      case "district":
        return `/daerah/${id}/${prov_id}/${prov_name}/${city_id}/${city_name}/${district_id}/${district_name}`;
      case "subdistrict":
        return `/daerah/${id}/${prov_id}/${prov_name}/${city_id}/${city_name}/${district_id}/${district_name}/${subdistrict_id}/${subdistrict_name}`;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const breadcrumb = document.querySelector(".breadcrumb-list");
      if (breadcrumb) {
        setIsOverflowing(breadcrumb.scrollWidth > breadcrumb.clientWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pathTitle]);

  return (
    <Breadcrumb>
      <BreadcrumbList className="breadcrumb-list flex-nowrap text-nowrap">
        <BreadcrumbItem>
          <BreadcrumbLink className="text-sm md:text-lg" href={`/daerah/${id}`}>
            Artikel
          </BreadcrumbLink>
          <BreadcrumbSeparator />
        </BreadcrumbItem>
        {isOverflowing ? (
          <>
            <BreadcrumbItem>
              <span className="text-sm md:text-lg">...</span>
              <BreadcrumbSeparator />
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={createUrl(pathTitle[pathTitle.length - 1].region)}
                className={`text-sm font-semibold md:text-lg ${
                  pathTitle[pathTitle.length - 1].region === "news"
                    ? "md:max-w-[500px] max-w-[200px] truncate text-ellipsis overflow-clip"
                    : ""
                } ${
                  color === "primary"
                    ? "text-primary"
                    : "text-secondary-foreground"
                }`}
              >
                {pathTitle[pathTitle.length - 1].title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        ) : (
          pathTitle.map((path, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink
                href={createUrl(path.region)}
                className={`text-sm md:text-lg ${
                  index !== pathTitle.length - 1
                    ? "text-primary-foreground"
                    : color === "primary"
                    ? "text-primary font-semibold"
                    : "text-secondary-foreground font-semibold"
                }`}
              >
                {path.title}
              </BreadcrumbLink>
              {index !== pathTitle.length - 1 && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          ))
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default RegionalBreadcrumb;
