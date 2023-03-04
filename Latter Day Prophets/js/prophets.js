const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

async function displayProphets(prophets) {
    const cards = document.querySelector("div.cards");

    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let firsth3 = document.createElement("h3");
        let secondh3 = document.createElement("h3");
        let thirdh3 = document.createElement("h3");
        let fourthh3 = document.createElement("h3");
        let fifthh3 = document.createElement("h3");
        let portrait = document.createElement("img");

        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        firsth3.textContent = `Date of Birth: ${prophet.birthdate}`;
        secondh3.textContent = `Place of Birth: ${prophet.birthplace}`;
        thirdh3.textContent = `Children: ${prophet.numofchildren}`;
        fourthh3.textContent = `Prophet Years: ${prophet.length}`;
        fifthh3.textContent = `Death: ${prophet.death}`;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        card.appendChild(h2);
        card.appendChild(firsth3);
        card.appendChild(secondh3);
        card.appendChild(thirdh3);
        card.appendChild(fourthh3);
        card.appendChild(fifthh3);
        card.appendChild(portrait);

        cards.appendChild(card);
    })
}

getProphetData();
