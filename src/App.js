// pages
import MainPage from "./pages/MainPage/MainPage";
import PosterPage from "./pages/PosterPage/PosterPage";
import ContentPage from "./pages/ContentPage/ContentPage";
import SavePage from "./pages/SavePage";

// components
import EmptyBox from "./components/EmptyBox/EmptyBox";

// css
import "./App.css";

function App() {
  return (
      <div className="App">
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
