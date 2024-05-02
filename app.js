let userScore = 0;
let aiBotScore = 0;
const choices = document.querySelectorAll('.choice');
const genCompChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random() * 3);
    return choices[randomIdx];
}
const playGame= (userChoice) => {
    console.log("User Choice = ", userChoice);

}
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});