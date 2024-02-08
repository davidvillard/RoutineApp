import { useState, useEffect } from "react";

export function useFetch(url){
    // Estados
const [ejercicios, setEjercicios] = useState([]);
const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerEjercicios = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('No se pudo obtener la lista de ejercicios');
        }

        const data = await response.json();
        setEjercicios(data.ejercicios);
      } catch (error) {
        console.error("Error al obtener la lista de ejercicios", error);
      }
    };

    obtenerEjercicios();
  }, []);
  return {ejercicios};
}