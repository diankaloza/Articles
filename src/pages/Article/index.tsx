import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import LoopIcon from '@mui/icons-material/Loop'
import { Card, CardActions, Typography } from '@mui/material'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import * as S from './styles'

import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { E_Status } from 'models/store'
import { RootState } from 'store'
import { fetchArticleItem } from 'store/article/slice'

export const Article: React.FC = () => {
  const dispatch = useAppDispatch()
  const { article, status } = useAppSelector((state: RootState) => state.articleItem)

  const { articleId } = useParams<{ articleId: string }>()

  useEffect(() => {
    if (articleId) {
      dispatch(fetchArticleItem(articleId))
    }
  }, [dispatch, articleId])

  if (!article) {
    return <> Loading...</>
  }
  return (
    <>
      {status === E_Status.LOADING ? (
        <S.LoadingArticle>
          {' '}
          Loading <LoopIcon fontSize='large' />{' '}
        </S.LoadingArticle>
      ) : (
        <S.CardWrapper>
          <Card>
            <S.CardImage image={article.imageUrl} />
          </Card>
          <S.BoxContainer>
            <S.CardText>
              <S.TypographyTitle gutterBottom variant='h4'>
                {article.title}
              </S.TypographyTitle>
              <Typography variant='body2' color='text.primary'>
                {article.description}
              </Typography>
            </S.CardText>
          </S.BoxContainer>

          <CardActions>
            <Link to='/'>
              <S.ButtonText startIcon={<KeyboardBackspaceIcon />} size='small'>
                <Typography textTransform='none' variant='button'>
                  Back to homepage
                </Typography>
              </S.ButtonText>
            </Link>
          </CardActions>
        </S.CardWrapper>
      )}
    </>
  )
}
