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

const playRound = (computerSelection) => {
    
    let playerSelection = prompt();
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

    return finalMessage;
}

const game = () => {
    let player = 0;
    let computer = 0;
    
    while (player < 3 && computer < 3){
        message = playRound(getComputerChoice());
        if (message.includes("You lose!")){
            computer++;
        } else if (message.includes("You win!")){
            player++;
        }
    }

    if (player === 3){
        return `Congratulations! You won! The score was, Player: ${player}, Computer: ${computer}`;
    }
    else {
        return `Sorry! The computer won. The score was, Player: ${player}, Computer: ${computer}`;
    }
}

console.log(game());