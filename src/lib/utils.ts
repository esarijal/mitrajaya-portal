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
    segments.pop();

    return `/${segments.join("/")}/${tag.id}/${tag.name}`;
  } else if (url.pathname.includes("/daerah")) {
    return `${url}/${tag.id}/${tag.name}`;
  } else {
    return `/daerah/${tag.id}/${tag.name}`;
  }
};

export function convertHtmlToPlainText(html = "") {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = html;

  // Replace <br> tags with two spaces
  tempElement.innerHTML = tempElement.innerHTML.replace(/<br\s*\/?>/gi, "  ");

  // Iterate over the child nodes to handle tags and text nodes separately
  let plainText = "";
  function iterateNodes(node: Node) {
    if (node.nodeType === Node.TEXT_NODE) {
      plainText += node.textContent;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.nodeName === "P") {
        if (plainText) {
          plainText += " "; // Add a space before new <p> content if plainText already has content
        }
      }
      node.childNodes.forEach(iterateNodes);
    }
  }

  tempElement.childNodes.forEach(iterateNodes);

  // Replace multiple spaces with a single space
  plainText = plainText.replace(/\s+/g, " ");

  return plainText;
}

export const unescapeHTMLContent = (escapedHtml: string) => {
  return escapedHtml.replace(/\\"/g, `"`);
};
