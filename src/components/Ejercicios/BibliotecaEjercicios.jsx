import { useFetch } from "../../useFetch";

const BibliotecaEjercicios = () => {
  const { ejercicios } = useFetch("http://127.0.0.1:5000/ejercicios");

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {ejercicios.map((ejercicio) => (
          <div
            key={ejercicio.id}
            className="bg-gray-100 p-4 rounded-md shadow-md"
          >
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
    </>
  );
};

export default BibliotecaEjercicios;
