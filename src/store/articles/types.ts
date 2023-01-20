export type T_Article = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  createdAt: string;
  fullDescription: string;
};

export type T_VisibleArticle = T_Article & { priority: number };

export type SearchArticlesParams = {
  search: string;
};

export enum E_Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface I_ArticlesSlice {
  articles: T_Article[];
  visibleArticles: T_VisibleArticle[];
  status: E_Status;
}
