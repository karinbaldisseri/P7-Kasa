import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home";
import About from "./pages/about";
import Error from "./pages/error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
