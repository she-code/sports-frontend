import { Reducer } from "react";
import {
  ArticleListAvilableAction,
  ArticlesState,
  ArticlesActions,
} from "./types";

// Define the initial state
export const initialState: ArticlesState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  articles: [],
};
export const articleReducer: Reducer<ArticlesState, ArticlesActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ArticleListAvilableAction.FETCH_ARTICLES_REQUESTS:
      return { ...state, isLoading: true };
    case ArticleListAvilableAction.FETCH_ARTICLES_SUCCESS: {
      return { ...state, isLoading: false, articles: action.payload };
    }
    case ArticleListAvilableAction.FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case ArticleListAvilableAction.FETCH_ARTICLE_REQUESTS:
      return { ...state, isLoading: true };
    case ArticleListAvilableAction.FETCH_ARTICLE_SUCCESS: {
      return { ...state, isLoading: false, article: action.payload };
    }
    case ArticleListAvilableAction.FETCH_ARTICLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
