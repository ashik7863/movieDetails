import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Movie from './components/Movie';
import DetailsView from './components/DetailsView';
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Movie/>}/>
        <Route path='/:id' element={<DetailsView/>}/>
      </Routes>
    </Router>
    </>
  );
}


export default App;

