let nameListening = document.getElementById("input_id");
let name = document.getElementById("input_id").value;
nameListening.oninput = () => {
    name = document.getElementById("input_id").value;
    console.log('The value is : ', name);
    document.getElementById("input_id").innerText.replace("f", "test")
}
