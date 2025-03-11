const countDownStart = (timer, interval, gameTimer) => {
    timer = 5;

    if (interval) clearInterval(interval);

    gameTimer.innerHTML = `<strong>Time left: ${timer}</strong>`;

    interval = setInterval(() => {
        timer--;
        gameTimer.innerHTML = `<strong>Time left: ${timer}</strong>`;

        if (timer <= 0) {
            clearInterval(interval);
            gameTimer.textContent = "<strong>Time's up!</strong>";
        }
    }, 1000);
};

export { countDownStart };