import './App.css';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {NavBar, VideoDetail,ChannelDetail,SearchFeed,Feed} from './components';
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail/>} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
