import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import HeroSection from "./pages/student/HeroSection";
import Mainlayout from "./layout/Mainlayout";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/MyLearning";
import EditProfile from "./pages/student/EditProfile";
import Sidebar from "./pages/admin/Sidebar";
import Dashboard from "./pages/admin/Dashboard";
import AllCourses from "./pages/admin/course/AllCourses";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Courses />
          </>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "myLearning",
        element: <MyLearning />,
      },
      {
        path: "editProfile",
        element: <EditProfile />,
      },

      // admin routes
      {
        path: "admin",
        element: <Sidebar />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "cousres",
            element: <AllCourses />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  );
}

export default App;
