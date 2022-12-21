let holes = document.querySelectorAll(".hole");

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

startTheGame();
