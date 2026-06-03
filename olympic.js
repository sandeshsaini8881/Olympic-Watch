const olywatch = document.getElementById('owatch');

function olympicCountdown() {
    const currentDate = new Date();
    const olympicDate = new Date("2028-07-14T00:00:00");

    const timeLeft = olympicDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    olywatch.innerText =
        `Olympic Countdown: ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

// Run immediately
olympicCountdown();

// Update every second
setInterval(olympicCountdown, 1000);