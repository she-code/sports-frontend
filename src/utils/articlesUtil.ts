import { Article } from "../contexts/articles/types";

export const filterArticles = (
  articles: Article[],
  sportFilters: string,
  teamFilters: string,
): Article[] => {
  const filteredArticles: Article[] = articles?.filter((article: Article) => {
    // If no teamFilters selected, return all articles
    if (teamFilters === "" && sportFilters === "") {
      return true;
    }

    // If both teamFilters and sportFilters are selected, filter based on both
    if (teamFilters !== "" && sportFilters !== "") {
      return (
        article.title.includes(teamFilters) &&
        article.sport.name === sportFilters
      );
    }

    // If only teamFilters is selected, filter based on team
    if (teamFilters !== "") {
      return article.title.includes(teamFilters);
    }

    // If only sportFilters is selected, filter based on sport
    if (sportFilters !== "") {
      return article.sport.name === sportFilters;
    }
    // Default case if none of the above conditions match
    return false;
  });
  return filteredArticles;
};
