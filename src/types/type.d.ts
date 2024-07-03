export type TrendingArticleType = {
  id: number;
  title: string;
  content: string;
  image_url: string;
  status: string;
  author_id: number;
  category_id: number;
  created_at: string;
  updated_at: string;
  prov_id: number;
  kota_id: number;
  kec_id: number;
  kel_id: number;
  published_at: string;
  total_interactions: number;
};

export type ArticleCategoryType = {
  id: number;
  name: string;
};

export type ArticleType = {
  id: number;
  title: string;
  content: string;
  author: number;
  published_at: string;
  updated_at: string;
  image_url: string;
  content: string;
  tags: string[];
};

export type ArticleTagType = {
  id: number;
  name: string;
};

export type ArticleCommentType = {
  id: number;
  article_id: number;
  user_id: number;
  content: string;
  user_email: string;
  created_at: string;
  updated_at: string;
};

export type ArticleCommentPayload = {
  article_id: number;
  user_id?: number;
  content: string;
  user_email?: string;
};

export type ProvinceType = {
  id: number;
  prov_name: string;
};

export type CityType = {
  id: number;
  kota_name: string;
};

export type DistrictType = {
  id: number;
  kecamatan_name: string;
};

export type SubdistrictType = {
  id: number;
  kelurahan_name: string;
};

export type ArticleResponsePaging = {
  total_pages: number;
  current_page: number;
  data: ArticleType[];
};
