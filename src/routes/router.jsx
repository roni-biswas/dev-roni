import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import ProjectDetails from "../pages/Projects/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "projects/:id",
        Component: ProjectDetails,
      },
    ],
  },
]);

export default router;
