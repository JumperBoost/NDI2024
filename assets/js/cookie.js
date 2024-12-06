let nameListening = document.getElementById("input_id");
nameListening.addEventListener("keypress", func);
let name = document.getElementById("input_id").value;

function func() {
    if (generateRandomChance() < 5){
        name = document.getElementById("input_id").value;
        document.getElementById("input_id").value = replaceChar(generateRandomIndex(),generateRandomChar());
    }
}

function replaceChar(index, char) {
    if (name.length === 0){
        return "";
    }
    return name.substring(0, index - 1) + char + name.substring(index, name.length);
}

function generateRandomIndex(){
    if (name.length === 0){
        return 0;
    }
    return Math.floor(Math.random() * name.length + 1);
}

function generateRandomChance(){
    return Math.floor(Math.random() * 10+1);
}

function generateRandomChar (){
    let result = '';
    const characters = 'azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN1234567890&é-è_çà=*!:;,?./§';
    const randomInd = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomInd);
    return result;
}

const input = document.getElementById('input_id');
const bubble = document.getElementById('ghost-bubble');

const mouth = document.querySelector('.ghost__mouth');

input.onkeydown = (e) => {
    if (e.keyCode === 13) {
        bubble.innerText = e.target.value;
        e.target.value = '';

        // mouth chatter
        let i = 0;
        if (mouthChatter) clearInterval(mouthChatter);

        const mouthChatter = setInterval(() => {
            mouth.classList.toggle('ghost__mouth--open');
            if (i === 6) clearInterval(mouthChatter);
            i++;
        }, 300);
    }
};

const liste = ["Quel est le point commun entre la transpiration et l'évaporation ?",
                        "Quel est le point commun entre la digestion des aliments et la décomposition des matières organiques dans l'eau ?",
                        "Quel est le point commun entre la respiration et l'aération de l'eau dans un aquarium ?",
                        "Quel est le point commun entre la circulation sanguine et le cycle de l'eau dans la nature ?",
                        "Quel est le point commun entre le rythme cardiaque et le flux et reflux des marées ?",
                        "Quel est le point commun entre les nerfs et les ondes à la surface de l'eau ?",
                        "Quel est le point commun entre les cheveux et les algues ?",
                        "Quel est le point commun entre la salive et l'eau douce ?",
                        "Quel est le point commun entre les glandes sudoripares et les sources d'eau ?",
                        "Quel est le point commun entre les globules blancs et les organismes filtrants dans l'eau ?"
                        ];

function generateH1(){
    let random = generateRandomChance();
    document.getElementById("h1").innerHTML = liste[random];
}
generateH1();

const refreshButton = document.getElementById("fleeButtonAccepter");

const refreshPage = () => {
    generateH1();
}

refreshButton.addEventListener('click', refreshPage)