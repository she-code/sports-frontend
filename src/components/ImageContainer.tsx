import { Article } from "../contexts/articles/types";

const ImageContainer = (props: { article: Article }) => {
  const { article } = props;
  return (
    <div
      style={{
        background: `url(${article.thumbnail}) no-repeat center center / cover`,
      }}
      className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover"
    ></div>
  );
};

export default ImageContainer;
