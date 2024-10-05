const url = "https://pokeapi.co/api/v2/type";

const form = document.getElementById("queryForm");

const div = document.getElementById('result')

let pokemons = [];

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const numbers = formData.get("numbers");
  const type = formData.get("type");
  const requiredPokemons = await getData(type, numbers);
  pokemons = [...requiredPokemons];
  console.log(pokemons)
  pokemons.map((e,i)=>{
    addPokemons(e.pokemon)
  })
});

async function getData(type, numbers) {
  const data = await fetch(url);
  const dataJson = await data.json();
  const results = dataJson.results;
  const url1 = results.filter((e, i) => {
    return e.name === type.toLowerCase();
  });
  const url2 = url1[0].url;
  const data1 = await fetch(url2);
  const data1Json = await data1.json();
  const allPokemons = data1Json.pokemon;
  const requiredPokemons = getRandomPokemons(allPokemons, numbers);
  return requiredPokemons;
}

function getRandomPokemons(arr, num) {
  // Check if the input number is greater than the array length
  if (num >= arr.length) {
    return arr; // Return the entire array if the number is greater than or equal to the array length
  }

  // Create a copy of the array to avoid modifying the original array
  let copyArr = [...arr];

  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = copyArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]];
  }

  // Return the first 'num' shuffled elements
  return copyArr.slice(0, num);
}


function addPokemons(pk){
    const divPoke = document.createElement('div')
    divPoke.innerText = pk.name;
    div.appendChild(divPoke)
}

