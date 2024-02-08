import { useFetch } from "../../useFetch";

const EjerciciosComponent = () => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
  {ejercicios.map((ejercicio) => (
    <div key={ejercicio.id} className="bg-gray-100 p-4 rounded-md shadow-md">
      <img
        src={ejercicio.imagen}
        alt={ejercicio.nombre}
        className="w-full h-80 object-cover mb-2 rounded-md"
      />
      <h2 className="text-lg font-semibold mb-2">{ejercicio.nombre}</h2>
      <p>ID: {ejercicio.id}</p>
    </div>
  ))}
</div>
      </div>
    </>
  );
};

export default EjerciciosComponent;

