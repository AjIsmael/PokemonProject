function loadDoc(nameforUrl, trainerArray,trainerArrayName) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myObj = JSON.parse(this.responseText);
      ability = []
      let i = 0
      while (i < myObj.abilities.length) {
        ability.push(myObj.abilities[i].ability.name);
        i++;
      }
      type = []
      let a = 0
      while (a < myObj.types.length) {
        type.push(myObj.types[a].type.name);
        a++;
      }
      a = new Pokemon(myObj['forms'][0]['name'],myObj.id,myObj.height,myObj.weight,ability,type,myObj.stats[5].base_stat,myObj.stats[4].base_stat,myObj.stats[3].base_stat,myObj.stats[2].base_stat,myObj.stats[1].base_stat,myObj.stats[0].base_stat,myObj.sprites.front_default,trainerArray,trainerArrayName)
      setTimeout(show(trainerArray,trainerArrayName),250)
    }
  };
  if (isNaN(nameforUrl)){
    url = `https://fizal.me/pokeapi/api/v2/name/${nameforUrl.toLowerCase()}.json`
  } else {
    url = `https://fizal.me/pokeapi/api/v2/id/${+nameforUrl}.json`
  }
  xhttp.open("GET", url, true);
  xhttp.send();

}

function showdetail(nameforUrl) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      detailObj = JSON.parse(this.responseText);
      var englishDescription = []
      for (var details of detailObj.flavor_text_entries) {
          if (details.language.name == "en" & englishDescription.length < 3){
            englishDescription.push(details.flavor_text);
        }
        }
      var text = englishDescription[0] + englishDescription[1] + englishDescription[2]
      document.getElementById('pokemon-detail').innerHTML = text
      var synth = window.speechSynthesis
      var utterThis = new SpeechSynthesisUtterance(text);
      synth.speak(utterThis);
    }
  };
   if (isNaN(nameforUrl)){
    url = `https://pokeapi.co/api/v2/pokemon-species/${nameforUrl}/`
  } else {
    url = `https://pokeapi.co/api/v2/pokemon-species/${+nameforUrl}/`
  }
  xhttp.open("GET", url, true);
  xhttp.send();

}


class Pokemon{
  constructor(name,id,height,weight,abilities,type,hp,attack,defense,special_attack,special_defense,speed,url,trainerArray,trainerArrayName){
    this.name = name
    this.id = id
    this.height = height
    this.weight = weight
    this.abilities = ability
    this.type = type
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.special_attack = special_attack
    this.special_defense = special_defense
    this.speed = speed
    this.url = url
    console.log(this);
    if(trainerArrayName.includes(this.name)){
      let b = trainerArrayName.indexOf(this.name)
      trainerArray.splice(b,1)
      trainerArrayName.splice(b,1)
    }
    trainerArray.push(this);
    trainerArrayName.push(this.name);
  }
}
class Trainer{
  constructor(trainerName){
    this.trainerName = trainerName
    this.pokemonCollector = []
    this.trainerPokemonName = []
  }
  get(identifier){
    loadDoc(identifier, this.pokemonCollector,this.trainerPokemonName)
    showdetail(identifier)

  }
  all(){
    return this.pokemonCollector
  }

}
ajaeb = new Trainer("Ajaeb")
function fetch(){
  var x = document.getElementById("myInput");
  ajaeb.get(x.value)
}
function show(pokemonList, pokemonNameList) {
  pokemon = pokemonList[pokemonList.length-1]
  document.getElementById('height').innerHTML = pokemon.height
  document.getElementById('weight').innerHTML = pokemon.weight
  document.getElementById('name').innerHTML = pokemon.name
  document.getElementById('ability').innerHTML = pokemon.abilities
  document.getElementById('type').innerHTML = pokemon.type
  document.getElementById('hp').innerHTML = pokemon.hp
  document.getElementById('id').innerHTML = pokemon.id
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
  percentageSA = (pokemon.special_attack/255)*100
  document.getElementById('sa-progress').style.width = `${percentageSA}%`
  if(pokemon.special_attack > 120){
    new3 = 'success'
  } else if (pokemon.special_attack > 65 ){
    new3 = 'warning'
  } else{
    new3 = 'danger'
  }
  if (document.getElementById('sa-progress').classList.length = 3){
    document.getElementById('sa-progress').classList.remove(document.getElementById('sa-progress').classList[3])
  }
  document.getElementById('sa-progress').classList.add(`progress-bar-${new3}`)
  document.getElementById('special-defense').innerHTML = pokemon.special_defense
  percentageSD = (pokemon.special_defense/255)*100
  document.getElementById('sd-progress').style.width = `${percentageSD}%`
  if(pokemon.special_defense > 120){
    new4 = 'success'
  } else if (pokemon.special_defense > 65 ){
    new4 = 'warning'
  } else{
    new4 = 'danger'
  }
  if (document.getElementById('sd-progress').classList.length = 3){
    document.getElementById('sd-progress').classList.remove(document.getElementById('sd-progress').classList[3])
  }
  document.getElementById('sd-progress').classList.add(`progress-bar-${new4}`)

  document.getElementById('speed').innerHTML = pokemon.speed
  percentageS = (pokemon.speed/255)*100
  document.getElementById('sp-progress').style.width = `${percentageS}%`
  if(pokemon.speed > 120){
    new5 = 'success'
  } else if (pokemon.speed > 65 ){
    new5 = 'warning'
  } else{
    new5 = 'danger'
  }
  if (document.getElementById('sp-progress').classList.length = 3){
    document.getElementById('sp-progress').classList.remove(document.getElementById('sp-progress').classList[3])
  }
  document.getElementById('sp-progress').classList.add(`progress-bar-${new5}`)


  if(document.getElementById('pokemon-picture').childElementCount > 0){
    document.getElementById('pokemon-picture').removeChild(document.getElementById('pokemon-picture').childNodes[0])
  }
  img = document.createElement('IMG')
  img.setAttribute("src", pokemon.url);
  document.getElementById('pokemon-picture').appendChild(img)

  his = document.createElement('a');
  his.setAttribute("class", 'dropdown-item');
  his.setAttribute('href', `javascript:ajaeb.get('${pokemon.name}')`);
  his.innerHTML = pokemon.name;
  document.getElementById('dropdown').appendChild(his)
  if(document.getElementById('dropdown').childElementCount == 11){
    document.getElementById('dropdown').removeChild(document.getElementById('dropdown').children[0])
  }
}
