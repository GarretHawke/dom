let holes = document.querySelectorAll('.hole');

const getRandomIndex = () => Math.floor(Math.random() * (holes.length - 1));

const addActiveHole = () => {
  const activeHole = getRandomIndex();
  holes[activeHole].classList.add('hole_has-devil');
}

const removeActiveHole = () => {
  holes.forEach(item => item.classList.remove('hole_has-devil'));
}

const changeActiveHole = () => {
  removeActiveHole();
  addActiveHole();
}

addActiveHole();

setInterval(() => {
  changeActiveHole();
}, 2500);

/* function getActiveHole() {
  const randomIndex = Math.floor(Math.random() * (holes.length - 1));
  return randomIndex;
}

function addActiveHole() {
  const activeHole = getActiveHole();
  holes[activeHole].classList.add('hole_has-devil');
}

addActiveHole(); */

/* let holes = document.querySelectorAll(".hole");

//Старт игры

function startTheGame() {

  // Получить рандомную нору

  function getHole() {
    const randomIndex = Math.floor(Math.random() * (holes.length - 1));
    return holes[randomIndex];
  };

  let hole = getHole();

  // Сделать ее активной

  function activateHole() {
    hole.classList.add('hole_has-devil');
  };

  activateHole();
  console.log(hole)

  // Через таймаут сделать ее не активной и запустить заново игру

  setTimeout(() => {
    function deactivateHole() {
      hole.classList.remove('hole_has-devil');
      console.log(hole);
    };
    deactivateHole();
    startTheGame();
  }, 800);
};

startTheGame(); */
