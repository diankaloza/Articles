import { Box, Grid, Skeleton, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const SkeletonSearchWrapper = styled(Box)`
  width: 1000px;
  margin-inline: auto;
`

export const GridSkeleton = styled(Grid)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  width: 1000px;
  margin-inline: auto;
`

export const SkeletonSearch = styled(Skeleton)`
  width: 400px;
`

export const SearchBlock = styled(Typography)`
  margin-inline: auto;
  max-width: 1000px;
  padding-left: 15px;
`

export const SkeletonArticles = styled(Skeleton)`
  margin-top: 15px;
  border-radius: 5px;
`
