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