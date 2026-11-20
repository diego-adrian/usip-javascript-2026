/**
 * This script fetches character data from the Rick and Morty API,
 * stores it in localStorage, and renders it on the page.
 * return {Array} Array of character objects fetched from the API or localStorage.
 */
async function getCharacters() {
    const response = await fetch("https://rickandmortyapi.com/api/character/1,2,3");
    const data = await response.json();
    localStorage.setItem("characters", JSON.stringify(data));
    return data;
}

function createArticle(character) {
    if (!character) {
        return null;
    }
    const article = document.createElement("article");
    // article.onclick = () => console.log(`${character?.name} clicked`);
    article.classList.add("tarjeta");
    article.innerHTML = `
    <img src="${character?.image}" alt="${character?.name}">
    <div class="info">
        <h2>${character?.name}</h2>
        <span class="estado vivo">${character?.species}</span>
        <p>${character?.status}</p>
        <p>${character?.gender}</p>
    </div>
    `;
    return article;
}

async function renderCharacters(characters) {
    const main = document.querySelector("main.personajes");
    characters.forEach(character => {
        const article = createArticle(character);
        if (article) {
            main.appendChild(article);
        }
    });
}

function getLocalCharacters() {
    const characters = localStorage.getItem("characters");
    return characters ? JSON.parse(characters) : false;
}

document.addEventListener("DOMContentLoaded", async function() {
    const existsCharacters = getLocalCharacters();
    if (!existsCharacters) {
        const main = document.querySelector("main.personajes");
        main.innerHTML = "Esperando personajes...";
        await new Promise(resolve => setTimeout(resolve, 3000)); // Simula un retraso de 3 segundos
        main.innerHTML = ""; // Limpia el mensaje de "Esperando personajes..."
        const characters = await getCharacters();
        await renderCharacters(characters);
    } else {
        console.log("Cargando desde localStorage");
        const characters = getLocalCharacters();
        await renderCharacters(characters);
    }
});