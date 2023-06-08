import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TopNav from "./components/TopNav/topNav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <TopNav />
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
