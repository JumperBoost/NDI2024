const button = document.getElementById("fleeButtonTest");
const container = button.parentElement;

let escapeCount = 0;
const maxEscapes = Math.random() * 10 + 4;
console.log(maxEscapes);

let rotation = 0;

button.addEventListener("mouseover" || "click", () => {
    if (escapeCount < maxEscapes) {
        rotation = rotation + 360;
        moveButtonWithinContainer();
        escapeCount++;
    } else {
        button.textContent = "Tu m'as attrapé !";
        button.style.cursor = "pointer";
    }
});

function moveButtonWithinContainer() {
    // Taille de la div parent
    const containerRect = container.getBoundingClientRect();

    // Taille du bouton
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Nouvelle position aléatoire relative à la div
    const newX =
        Math.random() * (containerRect.width - buttonWidth);
    const newY =
        Math.random() * (containerRect.height - buttonHeight);

    // Appliquer la nouvelle position en faisant tourner le bouton

    button.style.transform = `translate(${newX}px, ${newY}px) rotate(${rotation}deg)`;
}
