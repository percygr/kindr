import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TopNav from "./components/TopNav/topNav";
import BrowseTasks from "./components/BrowseTasks/browseTasks";
import CategoryTiles from "./components/CategoryTiles/categoryTiles";

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
            <Route path="/SelectCategory" element={<CategoryTiles />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
