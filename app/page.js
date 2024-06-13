// Importa el componente `Users` desde un archivo local. Este componente probablemente se encargará de mostrar la información de los usuarios en la interfaz.
import Users from "./components/Users";

// Define una función asíncrona llamada `fetchUsers` que se encargará de obtener los datos de los usuarios.
async function fetchUsers() {
  // Realiza una petición HTTP GET a la API especificada. `fetch` devuelve una promesa que se resuelve con la respuesta de la API.
  const res = await fetch("https://reqres.in/api/users");

  // Parsea la respuesta como JSON. `res.json()` también devuelve una promesa que se resuelve con los datos en formato JSON.
  const data = await res.json();

  // Extrae y retorna el arreglo de usuarios (`data.data`) de la respuesta JSON.
  return data.data;
}

// Define otra función asíncrona llamada `HomePage`, que representa el componente principal de la página.
async function HomePage() {
  // Llama a `fetchUsers` para obtener los datos de los usuarios y espera a que la promesa se resuelva.
  const users = await fetchUsers();

  // Renderiza el componente `Users`, pasándole el arreglo de `users` como prop. Esto permitirá que el componente `Users` muestre la información de los usuarios.
  return <Users users={users} />;
}

// Exporta la función `HomePage` como el componente predeterminado de este módulo. Esto permite que sea importado y utilizado en otros archivos.
export default HomePage;
