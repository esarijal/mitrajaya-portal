import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createRegionalTagsUrl = (tag: { id: number; name: string }) => {
  const url = window.location;
  const segments = url.pathname.split("/").filter(Boolean);

  if (url.pathname.includes("/detail-berita")) {
    // Exclude the first segment and the last two segments
    segments.shift(); // remove the first segment
    segments.pop(); // remove the last segment
    segments.pop(); // remove the second-to-last segment
    segments.pop(); // remove the third-to-last segment

    return `/${segments.join("/")}/${tag.id}/${tag.name}`;
  } else {
    return `${url}/${tag.id}/${tag.name}`;
  }
};
