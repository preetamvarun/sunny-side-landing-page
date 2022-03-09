const hamburger = document.getElementById("ham");
const dialogueBox = document.getElementById("menu");

hamburger.addEventListener('click', () => {
    dialogueBox.classList.toggle("show-options-box");
});