import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase, Typography } from "@mui/material";

import * as S from "./styles";
import { ChangeEvent, useState } from "react";
import { articlesActions } from "store/articles/slice";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import Divider from "@mui/material/Divider/Divider";

export const SearchInput = () => {
  const { visibleArticles, status } = useAppSelector((state) => state.articles);
  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState("");

  const handleChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
    dispatch(articlesActions.setVisibleArticlesBySearchInput({ searchValue }));
  };

  return (
    <>
      <Typography
        variant="subtitle1"
        display="block"
        gutterBottom
        textAlign="start"
      >
        Filter by keywords
      </Typography>

      <S.SearchInputWrapper>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Search..."
          value={searchValue}
          onChange={handleChangeSearchValue}
        />
      </S.SearchInputWrapper>
      {searchValue !== "" ? (
        <>
          <Typography>Result: {visibleArticles.length}</Typography>
          <Divider />
        </>
      ) : (
        <>
          <Typography> Result:</Typography>
          <Divider />
        </>
      )}
    </>
  );
};
