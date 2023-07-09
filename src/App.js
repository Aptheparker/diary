// pages
import MainPage from './pages/MainPage';
import PosterPage from './pages/PosterPage';
import ContentPage from './pages/ContentPage';
import SavePage from './pages/SavePage';

// css
import './App.css';

function App() {
  return (
      <div className="App">
        <MainPage/>
        <PosterPage/>
        <ContentPage/>
        <SavePage/>
      </div>
  );
}

export default App;
