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
    // Loop to generate characters for the specified length
    const randomInd = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomInd);
    return result;
}