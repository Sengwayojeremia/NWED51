// the API used for fetching business data
const API_URL = 'https://69d01d3490cd06523d5d0a63.mockapi.io/api/v1/businesses';

// used to get the card container element from the DOM
const container = document.getElementById('card-container');

// shows a loading message while data is being fetched
container.innerHTML = '<p style="text-align:center; padding: 20px;">Loading services...</p>';

// Async function to fetch and display businesses from the API
async function loadBusinesses() {
    try {
        // fetch data from the API
        const response = await fetch(API_URL);

        // check if the response was successful
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        // read the json response
        const businesses = await response.json();

        // remove the loading message before displaying cards
        container.innerHTML = '';

        // loop through each business and create a card
        for (let i = 0; i < businesses.length; i++) {
            const business = businesses[i];
            const card = document.createElement('div');
            card.className = 'card';

            // create the card HTML using business data from the API
            let cardHTML = '';
            cardHTML += '<img src="' + business.imageUrl + '" alt="' + business.businessName + '" width="400" height="300" loading="lazy">';
            cardHTML += '<div class="card-content">';
            cardHTML += '<h3>' + business.businessName + '</h3>';
            cardHTML += '<p><strong>Contact:</strong> ' + business.contact + '</p>';
            cardHTML += '<p><strong>Service:</strong> ' + business.serviceType + '</p>';
            cardHTML += '<p class="price">Prices range from R' + business.rate + '</p>';
            cardHTML += '<button class="btn" onclick="window.open(\'https://wa.me/' + business.contact + '\', \'_blank\')">Message ' + business.businessName + ' now</button>';
            cardHTML += '</div>';

            // add the card to the DOM
            card.innerHTML = cardHTML;
            container.appendChild(card);
            console.log(business.businessName + ' card added');
        }

    } catch (error) {
        // display an error message if the fetch fails
        console.log('error: ' + error);
        container.innerHTML = '<p style="color: red; padding: 20px;">Sorry, failed to load services.</p>';
    }
}

// call the function to load businesses when the page loads
loadBusinesses();
