let myDiv = document.getElementById("bateau");
const nbCanettes = 80;
let score = 0;

const container = document.getElementById("container")
function createDechet() {
    const dechet = document.createElement("div");
    dechet.style.left = Math.round(Math.random() * 100) + "%"; // Random horizontal start
    dechet.style.top = Math.round(Math.random() * 100) + "%"; // Set random X for translation
    dechet.classList.add("canette");
    container.appendChild(dechet);
}

function istouchDevice() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}

const move = (e) => {
    try {
        var x = !istouchDevice() ? e.pageX : e.touches.pageX;
        var y = !istouchDevice() ? e.pageY : e.touches.pageY;
    } catch (e) {}
    myDiv.style.left = x + "px";
    myDiv.style.top = y + "px";
};

document.addEventListener("mousemove", (e) => {
    move(e);
});
document.addEventListener("touchmove", (e) => {
    move(e);
});

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");

    while (container.children.length < nbCanettes) {
        createDechet();
    }
})

// Fonction pour détecter la collision entre le bateau et une canette
function checkCollision(bateau, canette) {
    // Obtenir les positions et tailles du bateau et de la canette
    const bateauRect = bateau.getBoundingClientRect();
    const canetteRect = canette.getBoundingClientRect();

    // Vérifier s'il y a intersection entre les deux éléments
    return !(bateauRect.right < canetteRect.left ||
        bateauRect.left > canetteRect.right ||
        bateauRect.bottom < canetteRect.top ||
        bateauRect.top > canetteRect.bottom);
}

// Fonction pour gérer les collisions entre le bateau et les canettes
function handleCollisions() {
    const bateau = document.getElementById('bateau'); // Récupère l'élément du bateau
    const canettes = document.querySelectorAll('.canette'); // Récupère toutes les canettes
    canettes.forEach((canette) => {
        if (checkCollision(bateau, canette)) {
            canette.remove(); // Supprimer la canette qui entre en collision
            score++;
            console.log(score);
            if (score === 80){
                createSprites();
                aGagne();
            }
        }
    });
}

// Appeler cette fonction régulièrement, par exemple dans un intervalle de temps ou après chaque mouvement du bateau
setInterval(handleCollisions, 50);

function aGagne(){
    alert("Vous avez gagné ! Vous avez ramassé un total de " + nbCanettes + " canettes")
}

function createSprite(containerSprite){
    const sprite = document.createElement("div");
    sprite.style.left = Math.round(Math.random() * 100) + "%"; // Random horizontal start
    sprite.style.top = Math.round(Math.random() * 100) + "%"; // Set random X for translation
    sprite.classList.add("sprite");
    containerSprite.appendChild(sprite);
}

function createSprites() {
    const containerSprite = document.getElementById("container-sprite");
    console.log("createSprites appelé")
    while (containerSprite.children.length < 10) {
        createSprite(containerSprite);
    }
}