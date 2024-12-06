const title = document.getElementById("title");


let angle = 0;
function titleDance() {
    let signe = Math.random() > 0.5 ? -1 : 1;
    angle = angle + signe*Math.random()*5;
    title.style.transform = "rotate("+angle+"deg)";
}


//Water effect developed by https://codepen.io/dpdknl/pen/LLLmre

const rippleSettings = {
    maxSize: 100,
    animationSpeed: 5,
    strokeColor: [148, 217, 255] };


const canvasSettings = {
    blur: 8,
    ratio: 1 };


function Coords(x, y) {
    this.x = x || null;
    this.y = y || null;
}

const Ripple = function Ripple(x, y, circleSize, ctx) {
    this.position = new Coords(x, y);
    this.circleSize = circleSize;
    this.maxSize = rippleSettings.maxSize;
    this.opacity = 1;
    this.ctx = ctx;
    this.strokeColor = `rgba(${Math.floor(rippleSettings.strokeColor[0])},
    ${Math.floor(rippleSettings.strokeColor[1])},
    ${Math.floor(rippleSettings.strokeColor[2])},
    ${this.opacity})`;

    this.animationSpeed = rippleSettings.animationSpeed;
    this.opacityStep = this.animationSpeed / (this.maxSize - circleSize) / 2;
};

Ripple.prototype = {
    update: function update() {
        this.circleSize = this.circleSize + this.animationSpeed;
        this.opacity = this.opacity - this.opacityStep;
        this.strokeColor = `rgba(${Math.floor(rippleSettings.strokeColor[0])},
      ${Math.floor(rippleSettings.strokeColor[1])},
      ${Math.floor(rippleSettings.strokeColor[2])},
      ${this.opacity})`;
    },
    draw: function draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.strokeColor;
        this.ctx.arc(this.position.x, this.position.y, this.circleSize, 0,
            2 * Math.PI);
        this.ctx.stroke();
    },
    setStatus: function setStatus(status) {
        this.status = status;
    } };


const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const ripples = [];
const container = document.getElementById("belowTheOcean");
const height = container.clientHeight;
const width = container.clientWidth;

canvas.style.filter = `blur(${canvasSettings.blur}px)`;

canvas.width = width * canvasSettings.ratio;
canvas.height = height * canvasSettings.ratio;

canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;

let animationFrame;




// Function which is executed on mouse hover on canvas
const canvasMouseOver = e => {
    const x = e.clientX * canvasSettings.ratio;
    const y = e.clientY * canvasSettings.ratio;
    ripples.unshift(new Ripple(x, y, 2, ctx));
    titleDance();
};

const animation = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const length = ripples.length;
    for (let i = length - 1; i >= 0; i -= 1) {
        const r = ripples[i];

        r.update();
        r.draw();

        if (r.opacity <= 0) {
            ripples[i] = null;
            delete ripples[i];
            ripples.pop();
        }
    }
    animationFrame = window.requestAnimationFrame(animation);
};

animation();
canvas.addEventListener('mousemove', canvasMouseOver);

