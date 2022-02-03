import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Post from './Pages/Post';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post/:slug" element={<Post/>}/>
      </Routes>
    </div>
  );
}

export default App;