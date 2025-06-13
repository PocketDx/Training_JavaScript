const botones = document.getElementById("botones");
const listaPokemon = document.getElementById("listaPokemon");

const URLtipo = "https://pokeapi.co/api/v2/type";
const URLpokemon = "https://pokeapi.co/api/v2/pokemon/";

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

fetch(URLtipo)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.results.forEach((tipo) => {
            crearFiltros(tipo.name);
        });
    });

for (let i = 1; i <= 120; i++) {
    fetch(URLpokemon + i)
    .then(response => response.json())
    .then(pokemon => mostrarPokemon(pokemon))
}

function crearFiltros(tipo){
    const btn = document.getElementById("filtro");
    btn.addEventListener("click", () => {
      const btnFiltro = document.createElement("button");
      btnFiltro.id = tipo;
      btnFiltro.className = "btn";
      btnFiltro.textContent = tipo;
      botones.appendChild(btnFiltro);
      btn.disabled = true;
    });
}

function mostrarPokemon(pokemon) {
  const tipos = pokemon.types.map(tipo => `<p class="tipo">${tipo.type.name}</p>`).join('');
  const div = document.createElement("div");
  div.classList.add("pokemon");
  div.innerHTML = `
    <div class="pokemon-imagen">
      <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
    </div>
    <div class="pokemon-info">
      <div class="nombre-contenedor">
        <p class="poke-id">${pokemon.id}</p>
        <h2 class="poke-nombre">${pokemon.name}</h2>
      </div>
      <div class="poke-tipos">
        ${tipos}
      </div>
      <div class="poke-stats">
        <p class="stat">${pokemon.height}m</p>
        <p class="stat">${pokemon.weight} kg</p>
      </div>
    </div>`
    listaPokemon.appendChild(div);
}

function filtrarPokemon() {
  const btn = document.getElementById("filtro");
}