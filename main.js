const player1 = {
  name: 'Pit',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['Nozh', 'Mech'],
  attack: function () {
    console.log(name + "Fight...")
  }
}

const player2 = {
  name: 'Jo',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['Nozh', 'Mech'],
  attack: function () {
    console.log(name + "Fight...")
  }
}

function createPlayer() {

  const $player1 = document.createElement('div');
  $player1.classList.add('player1');

  const $root = document.querySelector('.root');
  $root.appendChild($player1);

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

  $life.style.width = '100%';

  const $img = document.createElement('img');
  $img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';

  $character.appendChild($img);

  const $p = document.createElement('p');
  $p.innerText = 'Scorpion';
  $name.appendChild($p);

}


createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUB-ZERO', 80);



// - Для *** div.life *** добавь свойство style.width в значение 100 %;
// - Для *** div.name *** нужно положить текст, это имя нашего героя.
// - Для картинки можешь взять любую ссылку из приведенных ниже.


