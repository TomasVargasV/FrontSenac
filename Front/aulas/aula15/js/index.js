const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  const data = await APIResponse.json();
  return data;
};

const tipo1 = document.querySelector("#tipo1");
const tipo2 = document.querySelector("#tipo2");
const imgPokemon = document.querySelector("#imgPokemon");
const IDPokemon = document.querySelector("#IDPokemon");
const nomePokemon = document.querySelector("#nomePokemon");
const pesoPokemon = document.querySelector("#pesoPokemon");
const alturaPokemon = document.querySelector("#alturaPokemon");
const audioPokemon = document.querySelector("#audioPokemon");
const formEntradaDados = document.querySelector("#formEntradaDados");
const input = document.querySelector("#inputEntradaDados");

let IDPoke = 1;

const showPokemon = async (pokemon) => {
  const infoPokemon = await fetchPokemon(pokemon);
  IDPoke = infoPokemon.id;
  IDPokemon.innerHTML = `ID: ${infoPokemon.id}`;
  nomePokemon.innerHTML = infoPokemon.name;
  imgPokemon.src = infoPokemon.sprites.front_default;
  tipo1.innerHTML = infoPokemon.types[0].type.name;
  tipo2.innerHTML = "";
  tipo2.innerHTML = infoPokemon.types[1].type.name;
  let altura = (infoPokemon.height * 0.3048 * 10).toFixed(1);
  let peso = ((infoPokemon.weight * 0.453592) / 10).toFixed(1);
  alturaPokemon.innerHTML = `${altura} cm`;
  pesoPokemon.innerHTML = `${peso} kg`;
  audioPokemon.src = infoPokemon.cries.latest;
};

function start() {
  showPokemon(IDPoke);
}

function nextPokemon() {
  IDPoke += 1;
  showPokemon(IDPoke);
}

function previousPokemon() {
  if (IDPoke > 1) {
    IDPoke -= 1;
    showPokemon(IDPoke);
  }
}

formEntradaDados.addEventListener("submit", (event) => {
  event.preventDefault();
  showPokemon(input.value.toLocaleLowerCase());
});

function play() {
  audioPokemon.play();
}
