import { useRef } from "react";

// pages
import MainPage from "./pages/MainPage/MainPage";
import PosterPage from "./pages/PosterPage/PosterPage";
import ContentPage from "./pages/ContentPage/ContentPage";
import SavePage from "./pages/SavePage/SavePage";

// components

// css
import classes from "./App.module.css";

const App = () => {
  const posterImage = useRef(null);
  const contentImage = useRef(null);

  return (
    <div className={classes["App"]}>
      <MainPage />
      <PosterPage posterImageRef={posterImage} />
      <ContentPage contentImageRef={contentImage} />
      <SavePage posterImageRef={posterImage} contentImageRef={contentImage} />
    </div>
  );
};

export default App;
