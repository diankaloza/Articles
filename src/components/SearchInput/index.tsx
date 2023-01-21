import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputBase, Typography } from '@mui/material'
import Divider from '@mui/material/Divider/Divider'
import { ChangeEvent, useState } from 'react'

import * as S from './styles'

import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { articlesActions } from 'store/articles/slice'

export const SearchInput = () => {
  const visibleArticles = useAppSelector((state) => state.articles.visibleArticles)
  const dispatch = useAppDispatch()

  const [searchValue, setSearchValue] = useState('')

  const handleChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value
    setSearchValue(searchValue)
    dispatch(articlesActions.setVisibleArticlesBySearchInput({ searchValue }))
  }

  return (
    <>
      <Typography
        component='span'
        variant='subtitle1'
        display='block'
        gutterBottom
        textAlign='start'
      >
        Filter by keywords
      </Typography>

      <S.SearchInputWrapper>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <InputBase placeholder='Search...' value={searchValue} onChange={handleChangeSearchValue} />
      </S.SearchInputWrapper>
      <Typography component='span' variant='subtitle2'>
        Result: {visibleArticles.length}
      </Typography>
      <Divider />
    </>
  )
}
