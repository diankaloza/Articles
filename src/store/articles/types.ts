import { T_Article } from 'models/article'
import { E_Status } from 'models/store'

export type T_VisibleArticle = T_Article & { priority: number }

export type SearchArticlesParams = {
  search: string
}

export interface I_ArticlesSlice {
  articles: T_Article[]
  visibleArticles: T_VisibleArticle[]
  status: E_Status
}
