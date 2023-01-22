import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Inscription from "./page/Inscription/Inscription";
import Connexion from "./page/Connexion/Connexion";
import Errorpage from "./page/404";
import Roots from "./page/Roots";
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Roots />,
      errorElement: <Errorpage />,
      children: [
        {
          path: "/inscription",
          element: <Inscription />
        },
        {
          path: "/connection",
          element: <Connexion />
        },

      ]
    }
  ]);
  return <RouterProvider router={route} />

}

export default App;
