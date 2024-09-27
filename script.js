const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const emoji = document.getElementById('emoji');

// Prevent clicking the "Yes" button and move it
yesBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - yesBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - yesBtn.offsetHeight);
    yesBtn.style.position = 'absolute';
    yesBtn.style.left = `${x}px`;
    yesBtn.style.top = `${y}px`;
});

// Change emoji to smiling face after clicking "No"
noBtn.addEventListener('click', () => {
    emoji.textContent = '😊';
});
