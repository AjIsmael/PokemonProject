//how to use array inside hash
Pokemon_arr = []

class Pokemon{
  constructor(name, id, hp,){
    this.name = name
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

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     myObj = JSON.parse(this.responseText);
     for (car in myObj) {
       if(All_cars.length < 15){
        let newCar = new Cars(car, myObj[car]['model'], myObj[car]['make'],myObj[car]['color'],  myObj[car]['model_year'])
        All_cars.push(newCar)
       }
       if(Cars_order.length < 15){
        let newCar = new Cars(car, myObj[car]['model'], myObj[car]['make'],myObj[car]['color'],  myObj[car]['model_year'])
        Cars_order.push(newCar)
       }
     }
    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/mlaw-nycda/empireCommerce/master/cars.json", true);
  xhttp.send();
}
