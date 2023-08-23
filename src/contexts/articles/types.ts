import { Team } from "../teams/types";

export type Article = {
  id: number;
  title: string;
  summary: string;
  thumbnail: string;
  sport: Sport;
  date: string;
  content?: string;
  teams?: Team[];
};
type Sport = {
  id: number;
  name: string;
};

export type ArticlesState = {
  articles: Article[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  article?: Article;
};

export enum ArticleListAvilableAction {
  FETCH_ARTICLES_REQUESTS = "FETCH_ARTICLES_REQUESTS",
  FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS",
  FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE",
  FETCH_ARTICLE_REQUESTS = "FETCH_ARTICLE_REQUESTS",
  FETCH_ARTICLE_SUCCESS = "FETCH_ARTICLE_SUCCESS",
  FETCH_ARTICLE_FAILURE = "FETCH_ARTICLE_FAILURE",
  CLEAR_ARTICLE = "CLEAR_ARTICLE",
}

export type ArticlesActions =
  | {
      type: ArticleListAvilableAction.FETCH_ARTICLES_REQUESTS;
    }
  | {
      type: ArticleListAvilableAction.FETCH_ARTICLES_SUCCESS;
      payload: Article[];
    }
  | { type: ArticleListAvilableAction.FETCH_ARTICLES_FAILURE; payload: string }
  | { type: ArticleListAvilableAction.FETCH_ARTICLE_REQUESTS }
  | { type: ArticleListAvilableAction.FETCH_ARTICLE_SUCCESS; payload: Article }
  | { type: ArticleListAvilableAction.FETCH_ARTICLE_FAILURE; payload: string }
  | { type: ArticleListAvilableAction.CLEAR_ARTICLE };

export type ArticlesDispatch = React.Dispatch<ArticlesActions>;
