let cube = document.querySelector('.cube');
let isDragging = false;
let startX, startY;
let rotateX = -15;
let rotateY = 25;

// Stop auto-spin when user interacts
function stopSpin() {
    cube.style.animation = "none";
}

// Mouse events
document.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    stopSpin();
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    let dx = e.clientX - startX;
    let dy = e.clientY - startY;

    rotateY += dx * 0.3;
    rotateX -= dy * 0.3;

    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    startX = e.clientX;
    startY = e.clientY;
});

// Touch events (mobile)
document.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    stopSpin();
});

document.addEventListener('touchend', () => {
    isDragging = false;
});

document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    e.preventDefault(); // IMPORTANT for mobile

    let dx = e.touches[0].clientX - startX;
    let dy = e.touches[0].clientY - startY;

    rotateY += dx * 0.3;
    rotateX -= dy * 0.3;

    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
}, { passive: false });
