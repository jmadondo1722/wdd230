const url = 'https://jmadondo1722.github.io/wdd230/chamber/data.json';

async function getDirectoryData(){
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayBusinesses(data.companies)
}

const displayBusinesses = (companies) => {
    const cards = document.querySelector('div.cards');
    companies.forEach((company) => {
        let card = document.createElement('section');
        let portrait = document.createElement('img');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');

        //Adding data to the elements that we created above.

        let companyName = company.campanyname;
        let companyAddress = company.address;
        let number = company.phoneNumber;
        let url = company.websiteURL;
        let membership = company.membershipLevel

        h2.textContent = companyName;
        p1.textContent = companyAddress;
        p2.textContent = number;
        p3.textContent = url;
        p4.textContent = membership

        portrait.setAttribute('src', company.logo);
        portrait.setAttribute('alt','Logo of' + ' ' + companyName);
        portrait.setAttribute('loading', 'lazy');
        

        //Make the h2 and portrait children of card(section)

        card.appendChild(portrait);
        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        

        cards.appendChild(card);
    });
}


getDirectoryData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", () =>{


	display.classList.add("list");
	display.classList.remove("grid");
})
