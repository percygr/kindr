import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import TopNav from "./components/TopNav/topNav";
import BrowsePage from "./pages/Browse";
import CategoryTilesPage from "./pages/SelectCategory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <TopNav />
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/SelectCategory" element={<CategoryTilesPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
