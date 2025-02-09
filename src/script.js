document.addEventListener("DOMContentLoaded", () => {
  let counter = 0;
  let userInput = [10, 10, 10, 10, 10, 10, 10, 10, 10];
  const dialog = document.getElementById("dialogBox");
  const restart = document.getElementById("restart");
  const inputDialog = document.getElementById('inputDialog')
  const infobtn = document.getElementById('saveInfo')
  const gameGrid = document.getElementById('grid')
  let xPlayer, yPlayer;

  inputDialog.showModal()
  
  infobtn.addEventListener('click', () => {
    xPlayer = document.getElementById('XplayerName').value
    yPlayer = document.getElementById('YplayerName').value
    inputDialog.close()
    document.getElementById('gameHeading').classList.remove('hidden')
    document.getElementById('gameDiv').classList.remove('hidden')
    document.getElementById('gameDiv').classList.add('flex')

  })


  document.getElementById("grid").addEventListener("click", (event) => {
    if (event.target.children.length) return;
    if (event.target.tagName !== "BUTTON") return;
    const span = document.createElement("span");
    span.classList.add("text-5xl");

    if (counter % 2) {
      span.classList.add("fa-xmark");
      span.classList.add("fa-solid");
      userInput[event.target.id - 1] = 1;
      // span.classList.add('invert')
    } else {
      span.classList.add("fa-0");
      span.classList.add("fa-solid");
      userInput[event.target.id - 1] = 0;
      // span.classList.add('invert')
    }
    event.target.appendChild(span);
    console.log(userInput);
    
    if (
        counter === 8 &&
        (checkDiag() === -1 && checkHorz() === -1 && checkVer() === -1)
    ) {
        displayDialog(-1);
    } else {
        if(checkDiag() === 1 || checkHorz() === 1 || checkVer() === 1){
            displayDialog(1)
        } 
        if (checkDiag() === 0 || checkHorz() === 0 || checkVer() === 0){
            displayDialog(0)
        }
    }
    counter++;
  });

  restart.addEventListener("click", () => {
    counter = 0;
    
    for(let i = 1; i < 10; i++){
        const btn = document.getElementById(`${i}`)
        btn.innerHTML = ''
    }    

    userInput = [10, 10, 10, 10, 10, 10, 10, 10, 10];
    dialog.close()
  }); 

  function displayDialog(data) {
    if (data === -1) {
      dialog.querySelector("h1").textContent = "Game Tie 😟😟";
      dialog.querySelector("h2").textContent = "Try Again...";
    }
    if (data === 1) {
      dialog.querySelector("h1").textContent = "Congratulations.. 🎉🎉🎉";
      dialog.querySelector("h2").textContent =  `${xPlayer} won the game 😎😎`;
    }
    if (data === 0) {
      dialog.querySelector("h1").textContent = "Congratulations.. 🎉🎉🎉";
      dialog.querySelector("h2").textContent = `${yPlayer} won the game 😎😎`;
    }

    dialog.showModal()
  }

  function checkDiag() {
    if (
      userInput[0] + userInput[4] + userInput[8] === 3 ||
      userInput[2] + userInput[4] + userInput[6] === 3
    ) {
      return 1;
    } else if (
      userInput[0] + userInput[4] + userInput[8] === 0 ||
      userInput[2] + userInput[4] + userInput[6] === 0
    ) {
      return 0;
    }
    return -1;
  }

  function checkHorz() {
    if (
      userInput[0] + userInput[1] + userInput[2] === 3 ||
      userInput[3] + userInput[4] + userInput[5] === 3 ||
      userInput[6] + userInput[7] + userInput[8] === 3
    ) {
      return 1;
    } else if (
      userInput[0] + userInput[1] + userInput[2] === 0 ||
      userInput[3] + userInput[4] + userInput[5] === 0 ||
      userInput[6] + userInput[7] + userInput[8] === 0
    ) {
      return 0;
    }
    return -1;
  }

  function checkVer() {
    if (
      userInput[0] + userInput[3] + userInput[6] === 3 ||
      userInput[1] + userInput[4] + userInput[7] === 3 ||
      userInput[2] + userInput[5] + userInput[8] === 3
    ) {
      return 1;
    } else if (
      userInput[0] + userInput[3] + userInput[6] === 0 ||
      userInput[1] + userInput[4] + userInput[7] === 0 ||
      userInput[2] + userInput[5] + userInput[8] === 0
    ) {
      return 0;
    }
    return -1;
  }
});