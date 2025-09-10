import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { fetchArticles } from "../../services/articleService";
import type { Article } from "../../types/article";
import SearchForm from "../SearchForm/SearchForm";
import ArticleList from "../ArticleList/ArticleList";
import FormID from "../FormID/FormID";
import FormRadio from "../FormRadio/FormRadio";
import FormChekbox from "../FormCheckbox/FormCheckbox";
import FormSelect from "../FormSelect/FormSelect";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./App.module.css";
import { deployThemeToggle } from "../../theme";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import Timer from "../Timer/Timer";
import Modal from "../Modal/Modal";
import Clicker from "../Clicker/Clicker";
import EffectAsyncAwait from "../EffectAsyncAwait/EffectAsyncAwait";

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "theme-light";
  });
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = async (topic: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await fetchArticles(topic);

      setArticles(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    deployThemeToggle();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {isLoading && (
        <ColorRing
          height="100"
          width="100"
          colors={["#2a2a2a", "#585858ff", "#afafaf", "#9f9f9f", "#8c8c8c"]}
        />
      )}
      {isError && <p>Whoops, something went wrong! Please try again!</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
      <br />
      <br />
      <br />
      <FormID />
      <FormRadio />
      <FormChekbox />
      <FormSelect />
      <EffectAsyncAwait />
      <button onClick={() => setIsTimerOpen(!isTimerOpen)}>
        {isTimerOpen ? "Hide timer" : "Show timer"}
      </button>
      {isTimerOpen && <Timer />}
      <br />
      <br />
      <br />
      <button onClick={openModal}>Open modal</button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>Modal Title</h2>
          <p>This is some content inside the modal.</p>
        </Modal>
      )}
      <br />
      <br />
      <br />
      <Clicker />
      <ThemeToggle
        id="themeToggle"
        setTheme={setTheme}
        href={theme === "theme-dark" ? <RiMoonFill /> : <RiSunFill />}
      />
    </>
  );
}
