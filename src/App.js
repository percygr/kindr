import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TopNav from "./components/TopNav/topNav";
import BrowseTasks from "./components/BrowseTasks/browseTasks";

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
            <Route path="/browse" element={<BrowseTasks />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
