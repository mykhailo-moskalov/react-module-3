import type { Article } from "../..//types/article";

interface ArticleListProps {
  items: Article[];
}

export default function ArticleList({ items }: ArticleListProps) {
  return (
    <ul className="search-results">
      {items.map((i) => (
        <li key={i.objectID}>
          <a href={i.url} target="_blank" rel="noreferrer noopener">
            {i.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
