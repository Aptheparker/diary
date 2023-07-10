// pages
import MainPage from "./pages/MainPage/MainPage";
import PosterPage from "./pages/PosterPage/PosterPage";
import ContentPage from "./pages/ContentPage/ContentPage";
import SavePage from "./pages/SavePage/SavePage";

// components
import EmptyBox from "./components/EmptyBox/EmptyBox";

// css
import classes from "./App.module.css";

function App() {
  return (
      <div className={classes["App"]}>
        <MainPage />
        <EmptyBox />
        <PosterPage />
        <EmptyBox />
        <ContentPage />
        <EmptyBox />
        <SavePage />
      </div>
  );
}

export default App;
