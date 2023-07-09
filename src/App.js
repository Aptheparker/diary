import './App.css';

import MainPage from './pages/MainPage';
import PosterPage from './pages/PosterPage';
import ContentPage from './pages/ContentPage';
// import SavePage from './pages/SavePage';

import ImageExporter from './components/ImageExporter';


function App() {
  return (
      <div className="App">
        <MainPage/>
        <PosterPage/>
        <ContentPage/>
        <ImageExporter/>
      </div>
  );
}

export default App;
