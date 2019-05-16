array = {arcanine: {name: 'arcanine', stat:{hp:10, attack:20}}}
class Pokemon{
  constructor(namePokemon){
    this.newpokemon = array.namePokemon
    this.hp = this.newpokemon
    //this.attack = newpokemon.stat.attack
    //this.defense = 50
    //this.ability = 'ability'
  }
}
class Trainer{
  constructor(trainerName){
    this.trainerName = trainerName
    this.list = {}
  }
  get(namePokemon){
    let newpokemonObject = new Pokemon(namePokemon)
    //this.list.push(newpokemonObject)
    return newpokemonObject
  }
  all(){

  }
}
