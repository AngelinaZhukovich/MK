const player1 = {
  name: 'Sai',
  hp: 50,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['Nozh'],
  attack: function () {
    console.log(player1.name + "-Fight...")
  }
}

const player2 = {
  name: 'Moo',
  hp: 50,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ['Mech'],
  attack: function () {
    console.log(player2.name + "-Fight...")
  }
}

function createPlayer(name, img, hp) {

  const $player1 = document.createElement('div');
  $player1.classList.add('player1');


  const $root = document.querySelector('.root');
  // $root.appendChild($player1);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar')

  const $character = document.createElement('div');
  $character.classList.add('character')

  $player1.appendChild($progressbar);
  $player1.appendChild($character);

  const $life = document.createElement('div');
  $life.classList.add('life');

  const $name = document.createElement('div');
  $name.classList.add('name')

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  $life.style.width = hp + '%';

  const $img = document.createElement('img');
  $img.src = img;

  $character.appendChild($img);

  const $p = document.createElement('p');
  $p.innerText = name;
  $name.appendChild($p);

  const $arenas = document.querySelector('.arenas');
  $arenas.appendChild($player1);
  // $arenas.appendChild($player2);



  $player1.appendChild($progressbar);

}

createPlayer(player1.name, player1.img, player1.hp);
createPlayer(player2.name, player2.img, player2.hp);



