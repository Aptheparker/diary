import { useRef } from "react";

// pages
import PosterPage from "./pages/PosterPage/PosterPage";
import ContentPage from "./pages/ContentPage/ContentPage";
import SavePage from "./pages/SavePage/SavePage";
import ShowPage from './pages/showPage/ShowPage';

// components

// css
import classes from "./App.module.css";

const App = () => {
  const posterImage = useRef(null);
  const contentImage = useRef(null);

  return (
    <div className={classes["App"]}>
      <PosterPage posterImageRef={posterImage} />
      <ContentPage contentImageRef={contentImage} />
      <SavePage posterImageRef={posterImage} contentImageRef={contentImage} />
      <ShowPage/>
    </div>
  );
};

export default App;
