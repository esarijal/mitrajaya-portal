function RenderNewsContent({ content }: { content: string | undefined }) {
  const handleRenderContent = (content: string) => {
    return {
      __html: content,
    };
  };

  return (
    content && (
      <article>
        <div
          className="text-base md:text-lg text-secondary-foreground"
          dangerouslySetInnerHTML={handleRenderContent(content)}
        />
      </article>
    )
  );
}

export default RenderNewsContent;
