import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { ArticleCommentPayload } from "@/types/type";

async function addComment(payload: ArticleCommentPayload) {
  const response = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/articles/${
      payload.article_id
    }/comments`,
    {
      article_id: payload.article_id,
      user_id: payload.user_id,
      content: payload.content,
      user_email: payload.user_email,
    }
  );
  return response.data;
}

export function useAddArticleComments() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const addCommentMutation = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      toast({
        title: "Berhasil",
        description: "Komentar berhasil ditambahkan",
        variant: "default",
      });

      queryClient.invalidateQueries({ queryKey: ["articleComments"] });
    },
    onError: () => {
      toast({
        title: "Gagal",
        description: "Gagal menambahkan komentar",
        variant: "destructive",
      });
    },
  });

  return addCommentMutation;
}
