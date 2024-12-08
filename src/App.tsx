import "./assets/styles/global.scss";
import HomeScreen from "./screens/home/home-screen";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  RedirectionsToBGRemover,
  RedirectionsToRapidamente,
} from "./utils/redirections/redirections-utils";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <HomeScreen />,
        },
        {
          path: "/rapidamente",
          element: <RedirectionsToRapidamente />,
        },
        {
          path: "/background-remover",
          element: <RedirectionsToBGRemover />,
        },
      ])}
    />
  );
}

export default App;
