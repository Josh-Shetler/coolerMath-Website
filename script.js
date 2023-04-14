const games = [
    {
        src: "Assets/Tetroid.png",
        title: "Tetroid",
        name: "Tetroid",
        gamePage: "Tetroid.html"
    },
    {
        src: "Assets/chess.png",
        title: "Chess",
        name: "Chess",
        gamePage: "Chess.html"
    },
    {
        src: "Assets/",
        title: "Hitori",
        name: "Hitori",
        gamePage: "Hitori.html"
    }

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

function search() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const query = searchInput.value.trim().toLowerCase();

    // Clear previous results
    searchResults.innerHTML = '';

    // Filter the games based on the search query
    const filteredGames = games.filter((game) => game.name.toLowerCase().includes(query));

    // Display the search results
    for (const game of filteredGames) {
        const button = document.createElement("button");
        button.className = "Game";

        button.innerHTML = `
            <img src="${game.src}" width="150" height="100" title="${game.title}">
            <h2>${game.name}</h2>
        `;

        button.addEventListener("click", () => {
            window.location.href = game.gamePage;
        });

        searchResults.appendChild(button);
    }
}

document.getElementById('search-form').addEventListener('submit', (event) => {
    event.preventDefault();
    search();
});


