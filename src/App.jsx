// Importamos el hook 'useState' desde React.
// 'useState' es un hook que permite manejar estados dentro de un componente funcional.
import { useState } from 'react';

// Importamos el archivo CSS 'App.css' para aplicar estilos al componente.
import './App.css';

// Definimos el componente funcional principal 'App'.
// Un componente es como una "pieza" de la interfaz de usuario.
function App() {
  // Declaramos un estado 'a' con valor inicial de 0.
  // 'a' es el valor actual del estado.
  // 'setA' es una función que nos permite actualizar el estado 'a'.
  const [a, setA] = useState(0);

  // La función 'useState(0)' inicializa el estado en 0.
  // Cada vez que usamos 'setA', React re-renderiza el componente y actualiza la UI.

  return (
    // Retornamos el JSX que representa la interfaz del componente.
    // JSX (JavaScript XML) es una extensión de JavaScript que permite escribir HTML dentro de React.
    <div>
      {/* Creamos un botón con un manejador de eventos 'onClick'. */}
      {/* El evento 'onClick' se dispara cuando el usuario hace clic en el botón. */}
      <button
        onClick={() => setA(a + 1)} // Cuando el botón se hace clic, 'setA' incrementa el valor de 'a' en 1.
      >
        Click {/* Este es el texto visible dentro del botón. */}
      </button>

      {/* Mostramos un párrafo con el valor actual de 'a'. */}
      {/* Cada vez que 'a' se actualiza, React vuelve a renderizar este componente y muestra el valor actualizado. */}
      <p>
        Contador: {a} {/* '{a}' permite insertar el valor del estado 'a' dentro del JSX. */}
      </p>
    </div>
  );
}

// Exportamos el componente 'App' para que pueda ser utilizado en otros archivos.
// Esto es necesario porque 'App' será importado y renderizado en 'main.jsx'.
export default App;

