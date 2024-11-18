import { User } from "lucide-react";
import { Button } from "../ui/button";
import { useGetArticleComments } from "@/hooks/useGetArticleComments";
import { useAddArticleComments } from "@/hooks/useAddArticleComments";
import { useRef } from "react";

function ArticleComments({ articleID }: { articleID: number | undefined }) {
  const commentRef = useRef<HTMLInputElement | null>(null);

  const { data: comments } = useGetArticleComments({
    articleID: String(articleID) as string,
  });

  const addComment = useAddArticleComments();

  const submitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment = commentRef.current?.value;
    if (!comment) return;
    addComment.mutate({
      article_id: Number(articleID),
      content: comment,
      user_email: "",
    });
    if (commentRef.current) {
      commentRef.current.value = "";
    }
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <h2 className="text-secondary-foreground">Komentar</h2>
      <form
        onSubmit={submitComment}
        className="flex items-center gap-5 py-5 border-b border-[#DDE2EE]"
      >
        <div className="p-[10px] md:p-5 bg-secondary rounded-full">
          <User fill="#6C7EA5" stroke="#6C7EA5" />
        </div>
        <input
          type="text"
          ref={commentRef}
          className="w-full focus:outline-none"
          placeholder="Tambahkan komentar..."
        />
        <Button
          className="bg-[#151D2E] hover:bg-[#151D2E]/80 text-active"
          variant={"secondary"}
          type="submit"
        >
          Kirim
        </Button>
      </form>

      {/* comments */}
      {comments && comments.length > 0 && (
        <div className="divide-y divide-[#DDE2EE]">
          {comments.map((comment) => (
            <div key={comment.id} className="flex flex-col gap-5 py-5">
              <time className="text-xs text-primary-foreground md:text-base">
                {new Date(comment.created_at).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC",
                })}
              </time>
              <p className="text-sm md:text-base">{comment.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ArticleComments;
