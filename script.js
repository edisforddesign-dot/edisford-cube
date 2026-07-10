document.querySelector('.front').style.backgroundImage  = "url('images/front.jpg')";
document.querySelector('.back').style.backgroundImage   = "url('images/back.jpg')";
document.querySelector('.right').style.backgroundImage  = "url('images/right.jpg')";
document.querySelector('.left').style.backgroundImage   = "url('images/left.jpg')";
document.querySelector('.top').style.backgroundImage    = "url('images/top.jpg')";
document.querySelector('.bottom').style.backgroundImage = "url('images/bottom.jpg')";
let cube = document.querySelector('.cube');
let isDragging = false;
let startX, startY;
let rotateX = -15;
let rotateY = 25;

document.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    cube.style.animation = "none"; // stop auto spin
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
