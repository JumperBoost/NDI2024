const button = document.getElementById("fleeButtonTest");
const container = button.parentElement;

let escapeCount = 0;
const maxEscapes = Math.random() * 10 + 4;
console.log(maxEscapes);


button.addEventListener("mouseover", () => {
    if (escapeCount < maxEscapes) {
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
    const newX = Math.random() * (containerRect.width - buttonWidth);
    const newY = Math.random() * (containerRect.height - buttonHeight);

    // Rendre les jambes visibles et démarrer l'animation
    button.classList.add('fleeing'); // Activer la classe qui fait apparaître les jambes
    button.style.setProperty('visibility', 'visible');
    button.style.setProperty('opacity', '1'); // Rendre les jambes visibles

    // Déplacer le bouton avec la rotation
    button.style.transform = `translate(${newX}px, ${newY}px)`;

    // Masquer les jambes après un certain temps (après la fuite)
    setTimeout(() => {
        button.classList.remove('fleeing'); // Masquer les jambes après la fuite
    }, 500); // Durée qui correspond à la durée de la fuite
}
