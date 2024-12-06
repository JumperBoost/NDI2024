const api_url = 'https://ndi2024-chatbot.jumperboost.fr/';

for (const element of document.getElementById("chatbot-inputs").getElementsByTagName("textarea")) {
    element.addEventListener('input', element => textarea_auto_resize(element.target))
    textarea_auto_resize(element)
}

function textarea_auto_resize(element) {
    element.style.height = "0";
    element.style.height = (element.scrollHeight) + "px";
}

function derouler() {
    const checkbox_element = document.querySelector('#chatbot-visibility-btn > input[type="checkbox"]');
    const chatbot_element = document.getElementById("chatbot");
    if(checkbox_element.checked)
        chatbot_element.classList.remove("deroule");
    else chatbot_element.classList.add("deroule");
    checkbox_element.checked = !checkbox_element.checked;
}

function definirStatusChatbotJoignable() {
    // Modifier label status
    const status_element = document.getElementById("chatbot-status");
    status_element.classList.remove("label-red");
    status_element.classList.add("label-green");
    status_element.textContent = 'Connecté';

    // Activer les inputs
    const textarea_element = document.querySelector("#chatbot-inputs > textarea");
    const submit_element = document.querySelector("#chatbot-inputs > input[type='submit']")
    textarea_element.disabled = false;
    submit_element.disabled = false;
}

function verifierSiChatbotJoignable() {
    $.ajax({
        url: api_url,
        dataType: "jsonp",
        error: function (result) {
            if(result.status === 200)
                definirStatusChatbotJoignable();
        }
    });
}

function ajouterMessageClient(content) {
    const element = document.createElement("div");
    element.classList.add("chatbot-msg-client");
    element.textContent = content;
    document.getElementById("chatbot-msg").appendChild(element);
}

function ajouterMessageServeur(content) {
    const element = document.createElement("div");
    element.classList.add("chatbot-msg-server");
    element.textContent = content;
    document.getElementById("chatbot-msg").appendChild(element);
}

function envoyerPromptChatbot() {
    const textarea_element = document.querySelector("#chatbot-inputs > textarea");
    ajouterMessageClient(textarea_element.value);
    if(textarea_element.value.length > 0) {
        $.ajax({
            url: api_url + "request?prompt=" + encodeURI(textarea_element.value),
            success: function (result) {
                ajouterMessageServeur(result);
            },
            error: function (result) {
                console.log(result);
                if(result.status === 404)
                    ajouterMessageServeur("Désolé, je n'ai pas compris votre demande.");
                else ajouterMessageServeur("Une erreur est survenue lors du traitement de votre demande.");
            }
        });
        textarea_element.value = "";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Vérifier si le serveur est disponible
    verifierSiChatbotJoignable();
});