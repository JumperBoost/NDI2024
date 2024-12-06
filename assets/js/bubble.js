let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("bubble-container");
    const maxBubbles = 20; // Limit to 20 bubbles

    setInterval(() => {
        if (container.children.length < maxBubbles) {
            createBubble();
        }
    }, 600);

    function createBubble() {
        const bubble = document.createElement("span");
        bubble.classList.add("bubbles");

        const size = Math.random() * 3 + 2; // Random size between 2 and 5
        bubble.style.width = `${size}rem`;
        bubble.style.height = `${size}rem`;

        bubble.style.left = `${Math.random() * 100}%`; // Random horizontal start
        bubble.style.setProperty("--randomX", Math.random().toFixed(2)); // Set random X for translation

        container.appendChild(bubble);

        bubble.addEventListener("click", () => {
            bubble.style.width = `${size*2}rem`;
            bubble.style.height = `${size*2}rem`;
            bubble.style.transition = "all 1s ease-in-out";

            // Remove after 5 seconds
            setTimeout(() => bubble.remove(), 500);


            // Increment score and update display
            score++;
            document.getElementById("score-counter").textContent = `Score: ${score}`;
        });
    }
});
