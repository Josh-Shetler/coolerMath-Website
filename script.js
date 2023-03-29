const games = [
    {
        src: "Assets/Moto.png",
        title: "Moto",
        name: "Motorcross",
        gamePage: "motorcross.html"
    },
    {
        src: "Assets/Tetroid.png",
        title: "Tetroid",
        name: "Tetroid",
        gamePage: "Tetroid.html"
    },
];

const container = document.getElementById("games-container");

games.forEach(game => {
    const button = document.createElement("button");
    button.className = "Game";

    button.innerHTML = `
            <img src="${game.src}" width="150" height="100" title="${game.title}">
            <h2>${game.name}</h2>
        `;

    button.addEventListener("click", () => {
        window.location.href = game.gamePage;
    });

    container.appendChild(button);
});