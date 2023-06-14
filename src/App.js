import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/Home";
// import TopNav from "./components/TopNav/topNav";
import BrowsePage from "./pages/Browse";
import CategoryTilesPage from "./pages/SelectCategory";
import CreateTaskPage from "./pages/CreateTask";
import ViewTaskPage from "./pages/ViewTask";
import SuccessPage from "./pages/Success";
import MyTasksPage from "./pages/MyTasks";
import tyreIcon from "../src/imgs/icons/tire.png";
import gardenIcon from "../src/imgs/icons/gardening.png";
import shopIcon from "../src/imgs/icons/shopping-bags.png";
import houseWorkIcon from "../src/imgs/icons/house.png";
import deliveryIcon from "../src/imgs/icons/delivery-truck.png";
import otherIcon from "../src/imgs/icons/question-mark.png";
import Navbar from "./components/Navbar/Navbar";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

function App() {
  const [tasks, setTasks] = useState([]);
  // const [isMobile, setIsMobile] = useState(false);
  const [category, setCategory] = useState([]);
  const [categoryIcons, setCategoryIcons] = useState([]);
  const [selectedTask, setSelectedTask] = useState(0);

  useEffect(() => {
    getTasks();
    setCategoryIcons([
      { id: 1, image: tyreIcon },
      { id: 2, image: gardenIcon },
      { id: 3, image: shopIcon },
      { id: 4, image: houseWorkIcon },
      { id: 5, image: deliveryIcon },
      { id: 6, image: otherIcon },
    ]);
  }, []);

  async function getTasks() {
    let { data, error } = await supabase.from("tasks").select("*");
    if (error) {
      console.log("error", error);
    }
    setTasks(data);
  }

  //   useEffect(() => {
  //     const checkScreenWidth = () => {
  //       setIsMobile(window.innerWidth <= 500);
  //     };

  //     checkScreenWidth();
  //     window.addEventListener('resize', checkScreenWidth);
  //   return () => {
  //     window.removeEventListener('resize', checkScreenWidth);
  //   };
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {/* {!isMobile && <TopNav />}
        <TopNav /> */}
        <Navbar />

        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/browse"
              element={
                <BrowsePage
                  tasks={tasks}
                  setSelectedTask={setSelectedTask}
                  categoryIcons={categoryIcons}
                />
              }
            />
            <Route
              path="/mytasks"
              element={
                <MyTasksPage tasks={tasks} setSelectedTask={setSelectedTask} />
              }
            />
            <Route
              path="/categories"
              element={<CategoryTilesPage setCategory={setCategory} />}
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
            <Route
              path="/view"
              element={
                <ViewTaskPage
                  categoryIcons={categoryIcons}
                  selectedTask={selectedTask}
                  tasks={tasks}
                />
              }
            />
            <Route path="/success" element={<SuccessPage />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
