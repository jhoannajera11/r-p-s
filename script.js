let player = 0;
let computer = 0;

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1){
        choice = "piedra";
    } else if (choice === 2){
        choice = "papel";        
    } else if (choice === 3){
        choice = "tijeras";
    }
    return choice;
};

const playRound = (playerSelection,computerSelection) => {
    
    let finalMessage = 0;

    if (playerSelection.toLowerCase() === "piedra"){
        if (computerSelection === "piedra"){
            finalMessage = "It's a tie! You both selected Piedra";
            console.log(finalMessage);
        } else if (computerSelection === "papel"){
            finalMessage = "You lose! Papel beats Piedra.";
            console.log(finalMessage);
        } else if (computerSelection === "tijeras"){
            finalMessage = "You win! Piedra beats Tijeras";
            console.log(finalMessage);
        }
    }

    if (playerSelection.toLowerCase() === "papel"){
        if (computerSelection === "piedra"){
            finalMessage = "You win! Papel beats Piedra";
            console.log(finalMessage);
        } else if (computerSelection === "papel"){
            finalMessage = "It's a tie! You both selected Papel.";
            console.log(finalMessage);
        } else if (computerSelection === "tijeras"){
            finalMessage = "You lose! Tijeras beats Papel";
            console.log(finalMessage);
        }
    }

    if (playerSelection.toLowerCase() === "tijeras"){
        if (computerSelection === "piedra"){
            finalMessage = "You lose! Piedra beats Tijeras";
            console.log(finalMessage);
        } else if (computerSelection === "papel"){
            finalMessage = "You win! Tijeras beats Papel.";
            console.log(finalMessage);
        } else if (computerSelection === "tijeras"){
            finalMessage = "It's a tie! You both selected Tijeras.";
            console.log(finalMessage);
        }
    }

    const message = document.querySelector('.finalMessage');

    if (finalMessage.includes("You lose!") && player < 5 && computer < 5){
        computer++;
        const scoreUpdate = document.querySelector('#computer');
        scoreUpdate.textContent = `Computer: ${computer}`;
    } else if (finalMessage.includes("You win!") && player < 5 && computer < 5){
        player++;
        const scoreUpdate = document.querySelector('#player');
        scoreUpdate.textContent = `Player: ${player}`;
    }

    if(player === 5) {
        message.textContent = `You won the game! The final score was, Player: ${player}, Computer: ${computer}`;
        return; 
    } else if(computer === 5) {
        message.textContent = `You lost the game! The final score was, Player: ${player}, Computer: ${computer}`;
        return; 
    }

    message.textContent = finalMessage;

}

const buttons = document.querySelectorAll('.btn');
buttons.forEach( button => {
    button.addEventListener('click', (e) => {
        playRound(e.currentTarget.getAttribute("data-key"), getComputerChoice());
    });
});