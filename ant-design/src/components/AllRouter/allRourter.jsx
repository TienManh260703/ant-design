import { useRoutes } from "react-router-dom";
import { routes } from "../../routers/routes.jsx";
function AllRoute() {
  const element = useRoutes(routes);
  return <>{element}</>;
}
export default AllRoute;
