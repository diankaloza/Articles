import { Grid, Typography } from '@mui/material'
import { useEffect } from 'react'

import * as S from './styles'

import { ArticleCard } from 'components/ArticleCard'
import { SearchInput } from 'components/SearchInput'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { E_Status } from 'models/store'
import { RootState } from 'store'
import { fetchArticles } from 'store/articles/slice'

export const Home: React.FC = () => {
  const { visibleArticles, status } = useAppSelector((state: RootState) => state.articles)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  const skeletons = [...new Array(6)].map((items, index) => (
    <S.SkeletonArticles key={index} variant='rectangular' width={320} height={450} />
  ))
  return (
    <>
      {status === E_Status.LOADING ? (
        <>
          <S.SkeletonSearchWrapper>
            <S.SkeletonSearch variant='rectangular' height={127} />{' '}
          </S.SkeletonSearchWrapper>
          <S.GridSkeleton>{skeletons}</S.GridSkeleton>
        </>
      ) : (
        <>
          <S.SearchBlock>
            <SearchInput />
          </S.SearchBlock>
          <Grid
            direction='row'
            justifyContent='center'
            alignItems='center'
            container
            rowSpacing={2}
            columnSpacing={2}
            maxWidth={1000}
            mt={1}
            m='0 auto'
          >
            {visibleArticles.length && status === E_Status.SUCCESS ? (
              visibleArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  articleId={article.id}
                  date={article.createdAt}
                  description={article.description}
                  title={article.title}
                  imageUrl={article.imageUrl}
                />
              ))
            ) : (
              <Typography component='span'>Not found</Typography>
            )}
          </Grid>
        </>
      )}
    </>
  )
}
