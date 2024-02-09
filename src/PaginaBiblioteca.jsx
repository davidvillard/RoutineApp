import { useFetch } from "./useFetch";
import BibliotecaEjercicios from "./components/Ejercicios/BibliotecaEjercicios";

const PaginaBiblioteca = () => {
  const { ejercicios } = useFetch("http://127.0.0.1:5000/ejercicios");

  return (
    <>
      <nav className="bg-sky-500 text-white p-4 flex items-center justify-between">
        {/* Sección izquierda del Navbar (Logo) */}
        <div className="flex items-center">
          <span className="text-lg font-bold">Logo</span>
        </div>

        {/* Sección central del Navbar (Barra de Búsqueda) */}
        <div className=" mx-4 md:max-w-xs">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none text-black"
          />
        </div>

        {/* Sección derecha del Navbar (Iniciar Sesión) */}
        <div className="flex items-center">
          <a href="#" className="text-white hover:underline">
            Iniciar Sesión
          </a>
        </div>
      </nav>

      <div className="container mx-auto mt-8">
        <BibliotecaEjercicios />
      </div>
    </>
  );
};

export default PaginaBiblioteca;
