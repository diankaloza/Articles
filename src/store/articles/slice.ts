import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {
  T_Article,
  I_ArticlesSlice,
  E_Status,
  T_VisibleArticle,
} from "./types";

export const fetchArticles = createAsyncThunk<T_Article[]>(
  "articles/fetchByIdStatus",
  async () => {
    const { data } = await axios.get<T_Article[]>(
      `https://63c69995dcdc478e15c4f4c8.mockapi.io/collections`
    );
    return data;
  }
);
const initialState: I_ArticlesSlice = {
  articles: [],
  visibleArticles: [],
  status: E_Status.LOADING,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setVisibleArticlesBySearchInput: (
      state,
      action: PayloadAction<{ searchValue: string }>
    ) => {
      if (action.payload.searchValue) {
        const keywords = action.payload.searchValue
          .toLowerCase()
          .split(" ")
          // Remove empty keyword
          .filter((keyword) => keyword);

        state.visibleArticles = state.articles
          .reduce((acc, current) => {
            let currentArticle: T_VisibleArticle = { ...current, priority: 0 };

            keywords.forEach((keyword: string) => {
              // Add highlight to title and description
              const pattern = new RegExp(`${keyword}`, "gi");
              currentArticle.title = currentArticle.title.replace(
                pattern,
                (match) => `<mark>${match}</mark>`
              );
              currentArticle.description = currentArticle.description.replace(
                pattern,
                (match) => `<mark>${match}</mark>`
              );

              // Set priority for visible articles
              // +1 - for description
              // +2 - for title
              // +3 - for both
              if (current.title.toLowerCase().includes(keyword)) {
                currentArticle.priority += 2;
              }
              if (
                current.description
                  .toLowerCase()
                  .substring(0, 100)
                  .includes(keyword)
              ) {
                currentArticle.priority += 1;
              }
            });

            return [...acc, currentArticle];
          }, [] as T_VisibleArticle[])
          // Remove articles without keywords
          .filter((article) => article.priority >= 1)
          // Sort articles desc
          .sort((a, b) => b.priority - a.priority);

        return;
      }

      state.visibleArticles = state.articles.map((article) => ({
        ...article,
        priority: 0,
      }));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.status = E_Status.LOADING;
      state.articles = [];
      state.visibleArticles = [];
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.articles = action.payload;
      state.visibleArticles = action.payload.map((article) => ({
        ...article,
        priority: 0,
      }));
      state.status = E_Status.SUCCESS;
    });
    builder.addCase(fetchArticles.rejected, (state) => {
      state.status = E_Status.ERROR;
      state.articles = [];
      state.visibleArticles = [];
    });
  },
});

export const articlesActions = articlesSlice.actions;
