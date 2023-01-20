import { E_Status } from "store/articles/types";

export type Article = {
  title: string;
  imageUrl: string;
  description: string;
};

export interface I_ArticleItemSlice {
  article: Article;
  status: E_Status;
}
