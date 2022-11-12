const uuid = require("uuid");
const axios = require("axios").default;

const teamsDB = [
  {
    id: "6d0e32f4-28a4-4d5d-bfd3-fe23380e9e84",
    trainer: "a9c33907-6440-4cb8-a426-8764133a08c3",
    pokemons: [{
        id: '1597b08d-8af4-4c5c-bbb8-e115ea73bc1e',
        poke_id: 25,
        pokename: 'Pikachu',
        name: 'milaneso'
    }],
  },
];

const createTeam = (userId) => {
  const newTeam = {
    id: uuid.v4(),
    trainer: userId,
    pokemons: [],
  };
  teamsDB.push(newTeam);
  return newTeam;
};

const addPokemon = async (userId, pokemon) => {

    const index = teamsDB.findIndex(team => team.trainer === userId)

    await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokename.toLowerCase()}`)
        .then((res) => {
            teamsDB[index].pokemons.push({
                id: uuid.v4(),
                poke_id: res.data.id,
                pokename: pokemon.pokename,
                name: pokemon.name
            })
        })
    return teamsDB[index]
};
