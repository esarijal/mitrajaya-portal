import { unescapeHTMLContent } from "@/lib/utils";

function RenderNewsContent({ content }: { content: string | undefined }) {
  const handleRenderContent = (content: string) => {
    return {
      __html: unescapeHTMLContent(content),
    };
  };

  return (
    content && (
      <article>
        <div
          className="text-base md:text-lg text-secondary-foreground article-content"
          dangerouslySetInnerHTML={handleRenderContent(content)}
        />
      </article>
    )
  );
}

export default RenderNewsContent;
