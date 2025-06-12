const URLpokemon = "https://pokeapi.co/api/v2/type";

/**

async function fetchPokemon() {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    data.results.forEach((pokemon) => {
      const li = document.createElement("li");
      li.textContent = pokemon.name;
      listaPokemon.appendChild(li);
    });
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

*/
fetch(URLpokemon)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.results.forEach((tipo) => {
            crearFiltros(tipo.name);
        });
    });

function crearFiltros(tipo){
    const btn = document.getElementById("filtro");
    btn.addEventListener("click", () => {
    });
}