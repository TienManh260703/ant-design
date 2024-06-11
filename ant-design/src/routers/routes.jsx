import LayoutDefault from "../layout/LayoutDefault/LayoutDefault";
import BookRoom from "../pages/BookRoom/BookRoom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Error404 from "../pages/Error404/Error404";
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
        path: "*",
        element: <Error404 />,
      },
    ],
  },
];
