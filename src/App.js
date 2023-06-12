import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import TopNav from "./components/TopNav/topNav";
import BrowsePage from "./pages/Browse";
import CategoryTilesPage from "./pages/SelectCategory";
import CreateTaskPage from "./pages/CreateTask";
import ViewTaskPage from "./pages/ViewTask";
import SuccessPage from "./pages/Success";
import MyTasksPage from "./pages/MyTasks";
import BottomNav from "./components/BottomNav/bottomNav";

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
            <Route path="/categories" element={<CategoryTilesPage />} />
            <Route path="/create" element={<CreateTaskPage />} />
            <Route path="/view" element={<ViewTaskPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/mytasks" element={<MyTasksPage />} />
          </Routes>
        </div>
        <nav>
          <BottomNav />
        </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
