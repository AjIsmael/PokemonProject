function loadDoc(nameforUrl) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myObj = JSON.parse(this.responseText);
      // Pokemon_arr.push(myObj)
      pokemon = new Pokemon(nameforUrl)
      document.getElementById('height').innerHTML = pokemon.height
      document.getElementById('weight').innerHTML = pokemon.weight
      document.getElementById('gender').innerHTML = pokemon.name
      //document.getElementById('catagory').innerHTML = pokemon.catagory
      document.getElementById('ability').innerHTML = pokemon.abilities
      document.getElementById('type').innerHTML = pokemon.type
      document.getElementById('hp').innerHTML = pokemon.hp
      percentageHp = (pokemon.hp/255)*100
      document.getElementById('hp-progress').style.width = `${percentageHp}%`
      if(pokemon.hp > 120){
        new0 = 'success'
      } else if (pokemon.hp > 65 ){
        new0 = 'warning'
      } else{
        new0 = 'danger'
      }
      if (document.getElementById('hp-progress').classList.length = 3){
        document.getElementById('hp-progress').classList.remove(document.getElementById('hp-progress').classList[3])
      }
      document.getElementById('hp-progress').classList.add(`progress-bar-${new0}`)

      document.getElementById('attack').innerHTML = pokemon.attack
      percentageAttack = (pokemon.attack/255)*100
      document.getElementById('attack-progress').style.width = `${percentageAttack}%`
      if(pokemon.attack > 120){
        new1 = 'success'
      } else if (pokemon.attack > 65 ){
        new1 = 'warning'
      } else{
        new1 = 'danger'
      }
      if (document.getElementById('attack-progress').classList.length = 3){
        document.getElementById('attack-progress').classList.remove(document.getElementById('attack-progress').classList[3])
      }
      document.getElementById('attack-progress').classList.add(`progress-bar-${new1}`)

      document.getElementById('defense').innerHTML = pokemon.defense
      percentageDefense = (pokemon.defense/255)*100
      document.getElementById('defense-progress').style.width = `${percentageDefense}%`
      if(pokemon.defense > 120){
        new2 = 'success'
      } else if (pokemon.defense > 65 ){
        new2 = 'warning'
      } else{
        new2 = 'danger'
      }
      if (document.getElementById('defense-progress').classList.length = 3){
        document.getElementById('defense-progress').classList.remove(document.getElementById('defense-progress').classList[3])
      }
      document.getElementById('defense-progress').classList.add(`progress-bar-${new2}`)

      document.getElementById('special-attack').innerHTML = pokemon.special_attack
      document.getElementById('special-defense').innerHTML = pokemon.special_defense
      document.getElementById('speed').innerHTML = pokemon.speed
      if(document.getElementById('pokemon-picture').childElementCount > 0){

        document.getElementById('pokemon-picture').removeChild(document.getElementById('pokemon-picture').childNodes[1])
      }
      img = document.createElement('IMG')
      img.setAttribute("src", pokemon.url);
      document.getElementById('pokemon-picture').appendChild(img)
    }
  };
  if (isNaN(nameforUrl)){
    url = `https://fizal.me/pokeapi/api/v2/name/${nameforUrl.toLowerCase()}.json`
  } else {
    url = `https://fizal.me/pokeapi/api/v2/id/${nameforUrl}.json`
  }
  xhttp.open("GET", url, true);
  xhttp.send();
}
//how to use array inside hash
Pokemon_arr = []

class Pokemon{
  constructor(){
    this.name = myObj['forms'][0]['name']
    this.id = myObj.id
    this.height = myObj.height
    this.weight = myObj.weight
    this.gender = gender
    this.catagory = catagory
    this.abilities = []
    let i = 0
    while (i < myObj.abilities.length) {
      this.abilities.push(myObj.abilities[i].ability.name);
      i++;
    }
    this.type = []
    let a = 0
    while (a < myObj.types.length) {
      this.type.push(myObj.types[a].type.name);
      a++;
    }
    this.hp = myObj.stats[5].base_stat
    this.attack = myObj.stats[4].base_stat
    this.defense = myObj.stats[3].base_stat
    this.special_attack = myObj.stats[2].base_stat
    this.special_defense = myObj.stats[1].base_stat
    this.speed = myObj.stats[0].base_stat
    this.url = myObj.sprites.front_default
  }
}
class Trainer{
  constructor(trainerName, pokemon1, pokemon2, pokemon3){
    this.trainerName = trainerName
    this.pokemonIdentifer = []
    this.list = [pokemon1, pokemon2, pokemon3]
  }
  get(identifier){
   loadDoc(identifier)
  }
  all(){

  }

}

function fetch(){
  aj = new Trainer ()
  var x = document.getElementById("myInput");
  aj.get(x.value)
}

// function loadDoc(nameforUrl) {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//      myObj = JSON.parse(this.responseText);
//      document.getElementById('height').innerHTML = myObj.height
//
//
//      console.log(myObj['forms'][0]['name']);
//      i=0
//      while (i < myObj.abilities.length) {
//        console.log(myObj.abilities[i].ability.name);
//        i++;
//      }
//      a = 0
//      while (a < myObj.types.length) {
//        console.log(myObj.types[a].type.name);
//        a++;
//      }
//      console.log(myObj.stats[0].base_stat);//speed
//      console.log(myObj.stats[1].base_stat);//special-defense
//      console.log(myObj.stats[2].base_stat);//special-attack
//      console.log(myObj.stats[3].base_stat);//defense
//      console.log(myObj.stats[4].base_stat);//attack
//      console.log(myObj.stats[5].base_stat);//hp
//      console.log(myObj.height);
//      console.log(myObj.weight);
//      console.log(myObj.id);
//      console.log(myObj.sprites.back_default);//urlimage
//      let pokemon = new Pokemon(myObj.forms.name)
//         Pokemon_arr.push(pokemon)
//
//     }
//   };
//   xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/name/${nameforUrl}.json`, true);
//   xhttp.send();
// }
