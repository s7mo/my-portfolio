document.addEventListener("DOMContentLoaded", () => {
const canvas = document.getElementById("starfield") as HTMLCanvasElement | null;
if (!canvas) return; // Exit early if not found

const ctx = canvas.getContext("2d");
if (!ctx) return;

const stars: { x: number; y: number; radius: number; speed: number; }[] = [];
const starCount = 150;

function resizeCanvas() {
if (!canvas) return;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

for (let i = 0; i < starCount; i++) {
stars.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
radius: Math.random() * 1.5,
speed: Math.random() * 0.5 + 0.1,
});
}

function animateStars() {
if (!ctx || !canvas) return;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "white";

for (const star of stars) {
ctx.beginPath();
ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
ctx.fill();

star.y += star.speed;
if (canvas && star.y > canvas.height) {
star.y = 0;
star.x = Math.random() * canvas.width;
}
}

requestAnimationFrame(animateStars);
}

animateStars();
});
