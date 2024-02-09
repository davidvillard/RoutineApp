import { createBrowserRouter } from "react-router-dom";
import PaginaBiblioteca from "../PaginaBiblioteca";
import BibliotecaEjercicios from "../components/Ejercicios/BibliotecaEjercicios";


const router = createBrowserRouter([
  {
    path: "/biblioteca",
    element: <PaginaBiblioteca />,
    children: [
      {
        path: "ejercicios",
        element: <BibliotecaEjercicios />,
      },
    ],
  }
]);

export default router;
