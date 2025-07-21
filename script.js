// Matrix Rain Animation
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const fontSize = 18;
const columns = Math.floor(width / fontSize);
const drops = Array(columns).fill(1);
const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

function drawMatrix() {
  ctx.fillStyle = 'rgba(15,17,26,0.08)';
  ctx.fillRect(0, 0, width, height);
  ctx.font = fontSize + 'px Share Tech Mono, monospace';
  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillStyle = '#39ff14';
    ctx.shadowColor = '#00eaff';
    ctx.shadowBlur = 8;
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    ctx.shadowBlur = 0;
    if (drops[i] * fontSize > height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(drawMatrix, 40);

window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});

// Section Fade-in Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('main section').forEach(section => {
  section.classList.add('pre-fade');
  observer.observe(section);
});

// Add fade-in CSS via JS for extra effect
const style = document.createElement('style');
style.innerHTML = `
.pre-fade { opacity: 0; transform: translateY(40px); transition: all 1s cubic-bezier(.77,0,.18,1); }
.fade-in { opacity: 1 !important; transform: none !important; }
`;
document.head.appendChild(style); 