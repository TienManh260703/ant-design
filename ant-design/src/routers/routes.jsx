import LayoutDefault from "../layout/LayoutDefault/LayoutDefault";
import BookRoom from "../pages/BookRoom/BookRoom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Error404 from "../pages/Error404/Error404";
import CreateRoom from "../pages/CreateRoom/CreateRoom";
export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/book-room",
        element: <BookRoom />,
      },
      {
        path: "/create-room",
        element: <CreateRoom />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
];
