document.addEventListener('DOMContentLoaded', () => {
    const cuteText = document.getElementById('cuteText');
    const body = document.body;

    // Function to create and animate hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Random starting position at the bottom of the screen
        const startX = Math.random() * window.innerWidth;
        heart.style.left = `${startX}px`;
        heart.style.bottom = '-20px'; // Start slightly below the viewport

        // Random target X for animation (to make them spread out)
        const randX = (Math.random() - 0.5) * 500; // -250 to 250
        heart.style.setProperty('--randX', randX);

        body.appendChild(heart);

        // Remove heart after animation
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // Generate hearts every 300 milliseconds
    setInterval(createHeart, 300);

    // Click event for the cute text
    cuteText.addEventListener('click', () => {
        cuteText.textContent = "You are cute!";
        cuteText.style.color = "#8a2be2"; // Change color on click (blue violet)
        cuteText.style.transform = "scale(1.1)";

        // Revert after a short delay
        setTimeout(() => {
            cuteText.textContent = "Hello, Cute World!";
            cuteText.style.color = "#ff69b4";
            cuteText.style.transform = "scale(1)";
        }, 1500);
    });
});