import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { E_Status, T_Article } from "store/articles/types";
import { I_ArticleItemSlice } from "./types";

export const fetchArticleItem = createAsyncThunk<T_Article, string>(
  "articleItem/fetchByStatus",
  async (articleId) => {
    const { data } = await axios.get<T_Article>(
      "https://63c69995dcdc478e15c4f4c8.mockapi.io/collections/" + articleId
    );
    return data;
  }
);

const initialState: I_ArticleItemSlice = {
  article: {
    title: "",
    description: "",
    imageUrl: "",
  },
  status: E_Status.LOADING,
};

export const articleItemSlice = createSlice({
  name: "articleItem",
  initialState,
  reducers: {
    setArticles(state, action) {
      state.article = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticleItem.pending, (state) => {
      state.status = E_Status.LOADING;
      state.article = {
        title: "",
        description: "",
        imageUrl: "",
      };
    });
    builder.addCase(fetchArticleItem.fulfilled, (state, action) => {
      state.article = action.payload;
      state.status = E_Status.SUCCESS;
    });
    builder.addCase(fetchArticleItem.rejected, (state) => {
      state.status = E_Status.ERROR;
      state.article = {
        title: "",
        description: "",
        imageUrl: "",
      };
    });
  },
});

export const articleItemActions = articleItemSlice.actions;
