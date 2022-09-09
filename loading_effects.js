const refCoinFlip = document.querySelector(".coin_flip_loading");

refCoinFlip.addEventListener("mousedown", () => {
    const randomFlips = Math.round(Math.random()) * 0.5;

    refCoinFlip.style.setProperty("--flips", randomFlips + 2);
    refCoinFlip.style.setProperty("--base-flip", randomFlips);

    // Easier to work with classes
    refCoinFlip.classList.add("coin_launch");
    refCoinFlip.addEventListener("animationend", () => {
        refCoinFlip.classList.remove("coin_launch");
    });
});