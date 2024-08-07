import LayoutDefault from "../layout/LayoutDefault/LayoutDefault";
import BookRoom from "../pages/BookRoom/BookRoom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Error404 from "../pages/Error404/Error404";
import CreateRoom from "../pages/CreateRoom/CreateRoom";
import ListRoom from "../pages/ListRoom/ListRoom";
import TestDate from "../pages/TestDate/TestDate";
import Charts from "../pages/Charts/Charts";
import GiaoHangNhanh from "../pages/GHN";
import EmployeePage from "../pages/Employee";
import PGGPage from "../pages/PGG";
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
        path: "/list-room",
        element: <ListRoom />,
      },
      {
        path: "/test-date",
        element: <TestDate />,
      },
      {
        path: "/charts",
        element: <Charts />,
      },
      {
        path: "/orders",
        element: <GiaoHangNhanh />,
      },
      {
        path: "/employee",
        element: <EmployeePage />,
      },
      {
        path: "/pgg",
        element: <PGGPage />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
];
