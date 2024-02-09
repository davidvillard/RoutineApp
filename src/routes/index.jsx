import { createBrowserRouter } from "react-router-dom";
import PaginaBiblioteca from "../PaginaBiblioteca";
import BibliotecaEjercicios from "../components/Ejercicios/BibliotecaEjercicios";
 import { Ejemplo } from "../EjemploPaginaPrincipal";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Ejemplo />,
  },
  {
    path: "/biblioteca",
    element: <PaginaBiblioteca />,
  }
]);

export default router;
