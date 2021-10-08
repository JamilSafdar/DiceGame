//1. Roll fn: Create a function for rolling the dice - that will generate random number between 1 to 6, adds the results up.
//If player rolls 1, they lose. If player reaches 20, they win.

let die;
let totalScore = 0;
let gamePlaying;

const totalPoints = document.querySelector("#total");


let diceImgs = {
    dice1:'images/dice1.png',
    dice2:'images/dice2.png',
    dice3:'images/dice3.png',
    dice4:'images/dice4.png',
    dice5:'images/dice5.png',
    dice6:'images/dice6.png',
  }

const throwDice = () => {
    //1.Generate random number  
        die = Math.floor((Math.random() * 6) + 1);

    //2.Display result
        const dice = document.querySelector("#diceImg");
        dice.classList.remove("no-display");
        dice.src = diceImgs['dice' + die];

    //3. If dice = 1, player loses
        
        if (die === 1) {
            const loseMsg = document.querySelector("#you-lose");
            loseMsg.innerHTML = '💀 YOU LOSE! You rolled 1!';
            totalScore=0;
            toggleBtn(rollBtn);
        } else {
            hideMsg()
            totalScore += die;
            totalPoints.innerHTML = totalScore;
        }
        

        if (totalScore >= 20) {
            const winMsg = document.querySelector("#you-win");
            winMsg.innerHTML = 'CONGRATULATIONS! YOU WON! 👏🏻';
            totalScore = 0;
            tooggleBtn(rollBtn);
        }
}

//HIDE MESSAGES
const hideMsg = () => {
    document.querySelector("#you-lose").innerHTML = '';
    document.querySelector("#you-win").innerHTML = '';
}


//START GAME BY ROLLING THE DICE
const rollBtn = document.querySelector("#roll-btn");
rollBtn.addEventListener("click",  throwDice)

const toggleBtn = (btn) => {
    if (btn.disabled === true) {
        btn.disabled = false;
    } else if (btn.disabled === false) {
        btn.disabled = true;
    };
}


//RESET GAME
const reset = () => {
    totalScore = 0;
    document.querySelector("#diceImg").classList.add("no-display");
    totalPoints.textContent='0';
    hideMsg();
    toggleBtn(rollBtn);

}

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", reset);