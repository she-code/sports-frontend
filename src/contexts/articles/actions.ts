import { API_ENDPOINT } from "../../config/constants";

import { ArticleListAvilableAction, ArticlesDispatch } from "./types";

export const fetchArticles = async (dispatch: ArticlesDispatch) => {
  dispatch({ type: ArticleListAvilableAction.FETCH_ARTICLES_REQUESTS });
  try {
    const response = await fetch(`${API_ENDPOINT}/articles`);
    const data = await response.json();
    dispatch({
      type: ArticleListAvilableAction.FETCH_ARTICLES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // Specify 'Error' type for the error
    dispatch({
      type: ArticleListAvilableAction.FETCH_ARTICLES_FAILURE,
      payload: "Unable to fetch articles",
    });
  }
};
