const textElement = document.getElementById("animated-text");

const scenes = [
    "Netflix Presents",
    `Новинки 2025<br><br>
        <strong>Фильмы:</strong><br>
        - <strong>The Electric State</strong> – 14 марта 2025<br>
        - <strong>Rebel Moon – Part Two: The Scargiver</strong> – 19 апреля 2025<br>
        - <strong>The Old Guard 2</strong> – 2 июля 2025<br>
        - <strong>Beverly Hills Cop: Axel F</strong> – 3 октября 2025<br>
        - <strong>Frankenstein</strong> – ноябрь 2025<br><br>
    `,
    "Смотри первым! Подписывайся на Netflix и будь в курсе новинок."
];

let sceneIndex = 0;

function startTyping() {
    new Typed(textElement, {
        strings: [scenes[sceneIndex]],
        typeSpeed: 50,
        backSpeed: 25,
        showCursor: false,
        fadeOut: true,
        contentType: 'html',
        onComplete: () => {
            setTimeout(() => {
                sceneIndex = (sceneIndex + 1) % scenes.length;
                textElement.innerHTML = "";
                startTyping();
            }, 2000);
        }
    });
}

startTyping();
