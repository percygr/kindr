import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
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

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

function App() {
  const [tasks, setTasks] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoryIcons, setCategoryIcons] = useState([]);

  useEffect(() => {
    getTasks();
    setCategoryIcons([
      { id: 1, path: "../src/imgs/tire.png" },
      { id: 2, path: "Gardening" },
      { id: 3, path: "Shopping" },
      { id: 4, path: "Housework" },
      { id: 5, path: "Delivery" },
      { id: 6, path: "Other" },
    ]);
  }, []);

  async function getTasks() {
    let { data, error } = await supabase.from("tasks").select("*");
    if (error) {
      console.log("error", error);
    }
    setTasks(data);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <TopNav />
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse" element={<BrowsePage tasks={tasks} />} />
            <Route
              path="/categories"
              element={
                <CategoryTilesPage
                  setCategory={setCategory}
                  category={category}
                />
              }
            />
            <Route
              path="/create"
              element={
                <CreateTaskPage
                  category={category}
                  setCategory={setCategory}
                  categoryIcons={categoryIcons}
                />
              }
            />
            <Route path="/view" element={<ViewTaskPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/mytasks" element={<MyTasksPage tasks={tasks} />} />
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
