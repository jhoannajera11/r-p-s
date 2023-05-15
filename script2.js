const playRound = (e) => {
    const selected = e.currentTarget.getAttribute("data-key");
    console.log(selected);
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach( button => {
    button.addEventListener('click', playRound);
});