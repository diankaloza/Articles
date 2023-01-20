import { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";

import { ArticleCard } from "../components/ArticleCard";
import { SearchInput } from "../components/SearchInput";

import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";
import { RootState } from "store";
import { fetchArticles } from "store/articles/slice";
import { E_Status } from "store/articles/types";
import {
  GridSkeleton,
  SearchBlock,
  SkeletonArticles,
  SkeletonSearch,
} from "styles/pages/styles";
import { TypeFlags } from "typescript";

export const Home: React.FC = () => {
  const { visibleArticles, status } = useAppSelector(
    (state: RootState) => state.articles
  );
  const dispatch = useAppDispatch();
  console.log(visibleArticles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const skeletons = [...new Array(6)].map((items, index) => (
    <SkeletonArticles
      key={index}
      variant="rectangular"
      width={320}
      height={450}
    />
  ));
  return (
    <>
      {status === E_Status.LOADING ? (
        <>
          <Box>
            <SkeletonSearch variant="rectangular" width={649} height={131} />{" "}
          </Box>
          <GridSkeleton>{skeletons}</GridSkeleton>
        </>
      ) : (
        <SearchBlock>
          <SearchInput />
        </SearchBlock>
      )}
      <Grid
        direction="row"
        justifyContent="center"
        alignItems="center"
        container
        rowSpacing={2}
        columnSpacing={2}
        maxWidth={1000}
        mt={1}
        m="0 auto"
      >
        {visibleArticles.map((article) => (
          <ArticleCard
            key={article.id}
            articleId={article.id}
            date={article.createdAt}
            description={article.description}
            title={article.title}
            imageUrl={article.imageUrl}
          />
        ))}
      </Grid>
    </>
  );
};
