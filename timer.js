const countDownStart = (timer, interval, gameTimer) => {
    timer = 5;

    if (interval) clearInterval(interval);

    gameTimer.innerHTML = `Time left: ${timer}`;

    interval = setInterval(() => {
        timer--;
        gameTimer.innerHTML = `Time left: ${timer}`;

        if (timer <= 0) {
            clearInterval(interval);
            gameTimer.textContent = "Time's up!";
        }
    }, 1000);
};

export { countDownStart };