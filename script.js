const startDate = new Date(2026, 6, 2, 0, 0, 0);

function updateTimer() {
    const now = new Date();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

setInterval(updateTimer, 1000);
updateTimer();

const messages = [
    "Nemia & Nevia — Forever Lifetime na ito! ❤️",
    "May isang Nems dito na palaging proud sa'yo at nagmamahal sa'yo nang buong puso! ✨",
    "Mula TikTok Live hanggang sa habambuhay, ikaw lang ang pipiliin ko. 💕",
    "ILOVEYOUSOSOSOSOSOSOMUCHHHHH, MY LOVE, MY BABIII, MY LOVEYYY! 🌹"
];

let messageIndex = 0;
const loveBtn = document.getElementById('loveBtn');
const secretMessage = document.getElementById('secret-message');

loveBtn.addEventListener('click', () => {
    secretMessage.innerText = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
});

document.getElementById('year').innerText = new Date().getFullYear();