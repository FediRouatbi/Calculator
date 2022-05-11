import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Result from "./components/Result";
import Theme from "./components/Theme";
import Keyboard from "./components/Keyboard";
import About from "./components/pages/About";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import { KeyboardProvider } from "./context/keyboardContext";
function App() {
  return (
    <KeyboardProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              path="/calculator"
              element={
                <div className="calculator">
                  <Theme />
                  <Result />
                  <Keyboard />
                </div>
              }
            />

            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </KeyboardProvider>
  );
}

export default App;
