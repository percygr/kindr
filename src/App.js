import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
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
import UpdateProfilePage from "./pages/UpdateProfile";
import tyreIcon from "../src/imgs/icons/tire.png";
import gardenIcon from "../src/imgs/icons/gardening.png";
import shopIcon from "../src/imgs/icons/shopping-bags.png";
import houseWorkIcon from "../src/imgs/icons/house.png";
import deliveryIcon from "../src/imgs/icons/delivery-truck.png";
import otherIcon from "../src/imgs/icons/other2.png";
//import allIcon from "../src/imgs/icons/all.png";
import Navbar from "./components/Navbar/Navbar";
import FAQPage from "./pages/FAQpage";
import BlueLogo from "../src/imgs/logos/blue_text.png";

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
  const [categoryFilter, setCategoryFilter] = useState(0);
  const [successPath, setSuccessPath] = useState("login");
  const [session, setSession] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        getTasks();
        writeCategoryIcons();
        getUsers(session);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        getTasks();
        writeCategoryIcons();
        getUsers(session);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  function writeCategoryIcons() {
    setCategoryIcons([
      { id: 1, image: tyreIcon, name: "Transport" },
      { id: 2, image: gardenIcon, name: "Gardening" },
      { id: 3, image: shopIcon, name: "Shopping" },
      { id: 4, image: houseWorkIcon, name: "Housework" },
      { id: 5, image: deliveryIcon, name: "Delivery" },
      { id: 6, image: otherIcon, name: "Other" },
    ]);
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  async function getTasks() {
    let { data, error } = await supabase
      .from("tasks")
      .select("*")
      .order("id", { ascending: false });
    if (error) {
      console.log("error", error);
    }
    setTasks(data);
  }

  async function getUsers(session) {
    let { data, error } = await supabase
      .from("kindr_users")
      .select("*")
      .filter("supabase_id", "eq", session.user.id);
    if (error) {
      console.log("error", error);
    }
    setUserInfo(data[0]);
    //console.log("user info", data[0]);
  }
  console.log(window.location.href);
  if (!session) {
    return (
      <div className="login-page">
        <img src={BlueLogo} alt="logo" className="homepage-logo" />
        <h2 className="login-title">
          Welcome to Kindr - Mission Statement here
        </h2>
        <div className="login-container">
          <Auth
            redirectTo="https://kindr.netlify.app/"
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            onSignOut={() => setSession(null)}
            providers={["google", "facebook"]}
          />
        </div>
      </div>
    );
  } else if (!userInfo) {
    //console.log("loading user info");
    return <div>Loading user information...</div>;
  } else if (userInfo.firstname === null || userInfo.firstname === "") {
    //console.log("user first name", userInfo.firstname);
    //console.log("user info loaded", userInfo.email);
    return <UpdateProfilePage userInfo={userInfo} />;
  } else {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar handleLogout={handleLogout} />
          <div>
            <Routes>
              <Route path="/" element={<HomePage userInfo={userInfo} />} />
              <Route
                path="/browse"
                element={
                  <BrowsePage
                    tasks={tasks}
                    setSelectedTask={setSelectedTask}
                    categoryIcons={categoryIcons}
                    categoryFilter={categoryFilter}
                    setCategoryFilter={setCategoryFilter}
                  />
                }
              />
              <Route
                path="/mytasks"
                element={
                  <MyTasksPage
                    tasks={tasks}
                    setSelectedTask={setSelectedTask}
                    categoryIcons={categoryIcons}
                  />
                }
              />
              <Route
                path="/categories"
                element={
                  <CategoryTilesPage
                    setCategory={setCategory}
                    categoryIcons={categoryIcons}
                  />
                }
              />
              <Route
                path="/create"
                element={
                  <CreateTaskPage
                    category={category}
                    categoryIcons={categoryIcons}
                    getTasks={getTasks}
                    setSuccessPath={setSuccessPath}
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
                    getTasks={getTasks}
                    setSuccessPath={setSuccessPath}
                  />
                }
              />
              <Route
                path="/success"
                element={<SuccessPage successPath={successPath} />}
              />
              <Route path="/FAQpage" element={<FAQPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
