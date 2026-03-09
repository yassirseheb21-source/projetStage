import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./conpement/home.jsx";
import News from "./conpement/news.jsx";
import Council from "./conpement/council.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/council" element={<Council />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;