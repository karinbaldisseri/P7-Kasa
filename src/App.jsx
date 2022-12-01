import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home";
import About from "./pages/about";
import Error from "./pages/error";
import Accommodation from "./pages/accommodation";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
