import "./assets/styles/global.scss";
import HomeScreen from "./screens/home/home-screen";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RedirectionsToRapidamente } from "./utils/redirections/redirections-utils";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <HomeScreen />
        },
        {
          path: "/rapidamente",
          element: <RedirectionsToRapidamente />
        }
      ])}
    />
  );
}

export default App;
