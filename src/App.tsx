import "./assets/styles/global.scss";
import HomeScreen from "./screens/home/home-screen";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  RedirectionsToBGRemover,
  RedirectionsToRapidamente,
} from "./utils/redirections/redirections-utils";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

export default App;
