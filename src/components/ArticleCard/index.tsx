import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { CardContent, Typography, CardActions, Grid, CardHeader } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import * as S from 'pages/Article/styles'

interface I_ArticleCardProps {
  articleId: string
  title: string
  imageUrl: string
  description: string
  date: string
}

export const ArticleCard: React.FC<I_ArticleCardProps> = ({
  articleId,
  title,
  imageUrl,
  description,
  date,
}) => {
  return (
    <Grid item md={4}>
      <S.CardContainer>
        <S.CardMediaFile image={imageUrl} />
        <CardHeader avatar={<CalendarMonthIcon color='disabled' />} subheader={date} />
        <CardContent>
          <Link to={`/article/${articleId}`} key={articleId}>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              height={60}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </Link>
          <Typography
            variant='body2'
            color='text.secondary'
            dangerouslySetInnerHTML={{
              __html: description.substring(0, 100) + '...',
            }}
          />
        </CardContent>
        <CardActions>
          <Link to={`/article/${articleId}`} key={articleId}>
            <S.ButtonIcon endIcon={<ArrowForwardIcon />} size='small'>
              <Typography textTransform='none' variant='button'>
                Read more
              </Typography>
            </S.ButtonIcon>
          </Link>
        </CardActions>
      </S.CardContainer>
    </Grid>
  )
}
