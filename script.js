document.addEventListener('DOMContentLoaded', () => {
    const publicKey = '3e353309089f7aac42561a29643ad93c'; // Buraya kendi public key'inizi koyun
    const privateKey = '229e615891250640f7ea7851fd9992c6ae5fec78'; // Buraya kendi private key'inizi koyun
    const ts = new Date().getTime().toString();
    const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

    // Spider-Man
    const spiderManURL = `https://gateway.marvel.com/v1/public/characters/1009610?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    // Iron Man
    const lokiURL = `https://gateway.marvel.com/v1/public/characters/1009407?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    // Captain America
    const winterSoldierURL = `https://gateway.marvel.com/v1/public/characters/1010740?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    // Thor
    const thorURL = `https://gateway.marvel.com/v1/public/characters/1009664?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    
    //Black Widow
    const blackWidowURL = `https://gateway.marvel.com/v1/public/characters/1009189?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    //Scarlet Witch
    const scarletWitchURL = `https://gateway.marvel.com/v1/public/characters/1017310?ts=${ts}&apikey=${publicKey}&hash=${hash}`;



    async function fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayData(data.data.results[0]); // API yanıtında sadece bir karakter var
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    function displayData(character) {
        const dataContainer = document.getElementById('data-container');

        const characterDiv = document.createElement('div');
        characterDiv.classList.add('character');
        characterDiv.innerHTML = `
            <h2>${character.name}</h2>
            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}">
        `;
        dataContainer.appendChild(characterDiv);
    }

    // Her karakter için API isteği yap
    fetchData(spiderManURL);
    fetchData(thorURL);
    fetchData(lokiURL);
    fetchData(winterSoldierURL);
    fetchData(blackWidowURL);
    fetchData(scarletWitchURL);
});
