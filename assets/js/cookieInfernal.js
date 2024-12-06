const boutonRefuser = document.getElementById("fleeButtonTest");
const boutonAccepter = document.getElementById("fleeButtonAccepter")
const container = boutonRefuser.parentElement;

let escapeCount = 0;
const maxEscapes = Math.random() * 10 + 4;
console.log(maxEscapes);


boutonRefuser.addEventListener("mouseover" || "click", () => {
    if (escapeCount < maxEscapes) {
        moveButtonWithinContainer();
        escapeCount++;
    } else {
        boutonRefuser.textContent = "C'est bon, j'me rend ! (Refuser)";
        boutonRefuser.style.cursor = "pointer";
    }
});

function moveButtonWithinContainer() {
    // Taille de la div parent
    const containerRect = container.getBoundingClientRect();

    // Taille du bouton
    const currentRect = boutonRefuser.getBoundingClientRect();
    const currentX = currentRect.left - containerRect.left;
    const currentY = (currentRect.top - containerRect.top) -20;

    // Nouvelle position aléatoire pour le bouton "Refuser"
    const newX = Math.random() * (containerRect.width - boutonRefuser.offsetWidth);
    const newY = Math.random() * (containerRect.height - boutonRefuser.offsetHeight);

    // Déplacer le bouton "Accepter" à l'ancienne position du bouton "Refuser"
    boutonAccepter.style.transform = `translate(${currentX}px, ${currentY}px)`;

    // Rendre les jambes visibles et démarrer l'animation
    boutonAccepter.classList.add('fleeing'); // Activer la classe qui fait apparaître les jambes
    boutonAccepter.style.setProperty('visibility', 'visible');
    boutonAccepter.style.setProperty('opacity', '1'); // Rendre les jambes visibles


    boutonRefuser.classList.add('fleeing'); // Activer la classe qui fait apparaître les jambes
    boutonRefuser.style.setProperty('visibility', 'visible');
    boutonRefuser.style.setProperty('opacity', '1'); // Rendre les jambes visibles

    // Déplacer le bouton avec la rotation
    boutonRefuser.style.transform = `translate(${newX}px, ${newY}px)`;

    // Masquer les jambes après un certain temps (après la fuite)
    setTimeout(() => {
        boutonRefuser.classList.remove('fleeing'); // Masquer les jambes après la fuite
        boutonAccepter.classList.remove('fleeing');
    }, 500); // Durée qui correspond à la durée de la fuite
}
