//how to use array inside hash
array = {arcanine: {name: 'arcanine', stat:{hp:10, attack:20}}}
class Pokemon{
  constructor(namePokemon){
    this.newpokemon = array[namePokemon]
    this.pokemonName = this.newpokemon.name
    this.hp = this.newpokemon.stat.hp
    this.attack = this.newpokemon.stat.attack
    //this.defense = 50
    //this.ability = 'ability'
  }
}
class Trainer{
  constructor(trainerName){
    this.trainerName = trainerName
    this.list = []
  }
  get(namePokemon){
    let newpokemonObject = new Pokemon(namePokemon)
    //this.list.push(newpokemonObject.newpokemonName)
    console.log(newpokemonObject.pokemonName);
    console.log(newpokemonObject.hp);
    console.log(newpokemonObject.attack);
    return newpokemonObject
  }
  all(){

  }
}
