import { T_Article } from 'models/article'
import { E_Status } from 'models/store'

export interface I_ArticleItemSlice {
  article: T_Article
  status: E_Status
}
