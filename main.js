//how to use array inside hash
Pokemon_arr = []

class Pokemon{
  constructor(name,id,hp){
    this.name = name
    this.id = id
    this.height = height
    this.weight = weight
    this.gender = gender
    this.catagory = catagory
    this.abilities = abilities
    this.type = type
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.special_attack = special_attack
    this.special_defense = special_defense
    this.speed = speed


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

function loadDoc(nameforUrl) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     myObj = JSON.parse(this.responseText);
     document.getElementById('height').innerHTML = myObj.height


     console.log(myObj['forms'][0]['name']);
     i=0
     while (i < myObj.abilities.length) {
       console.log(myObj.abilities[i].ability.name);
       i++;
     }
     a = 0
     while (a < myObj.types.length) {
       console.log(myObj.types[a].type.name);
       a++;
     }
     console.log(myObj.stats[0].base_stat);//speed
     console.log(myObj.stats[1].base_stat);//special-defense
     console.log(myObj.stats[2].base_stat);//special-attack
     console.log(myObj.stats[3].base_stat);//defense
     console.log(myObj.stats[4].base_stat);//attack
     console.log(myObj.stats[5].base_stat);//hp
     console.log(myObj.height);
     console.log(myObj.weight);
     console.log(myObj.id);
     console.log(myObj.sprites.back_default);//urlimage
     let pokemon = new Pokemon(myObj.forms.name)
        Pokemon_arr.push(pokemon)

    }
  };
  xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/name/${nameforUrl}.json`, true);
  xhttp.send();
}
