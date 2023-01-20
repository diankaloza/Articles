import { Routes, Route } from "react-router-dom";
import { Article } from "./pages/Article";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:articleId" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
