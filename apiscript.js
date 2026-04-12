var API_URL = 'https://69d01d3490cd06523d5d0a63.mockapi.io/api/v1/businesses';
var container = document.getElementById('card-container');

async function loadBusinesses() {
    try {
        var response = await fetch(API_URL);
        var businesses = await response.json();

        for (var i = 0; i < businesses.length; i++) {
            var business = businesses[i];
            var card = document.createElement('div');
            card.className = 'card';

            var cardHTML = '';
            cardHTML += '<img src="' + business.imageUrl + '" alt="' + business.businessName + '" width="400" height="300" loading="lazy">';
            cardHTML += '<div class="card-content">';
            cardHTML += '<h3>' + business.businessName + '</h3>';
            cardHTML += '<p><strong>Contact:</strong> ' + business.contact + '</p>';
            cardHTML += '<p><strong>Service:</strong> ' + business.serviceType + '</p>';
            cardHTML += '<p class="price">Prices range from R' + business.rate + '</p>';
            cardHTML += '<button class="btn" onclick="window.open(\'https://wa.me/' + business.contact + '\', \'_blank\')">Message ' + business.businessName + ' now</button>';
            cardHTML += '</div>';

            card.innerHTML = cardHTML;
            container.appendChild(card);
            console.log(business.businessName + ' card added');
        }

    } catch (error) {
        console.log('error: ' + error);
        container.innerHTML = '<p style="color: red; padding: 20px;">Sorry, failed to load services.</p>';
    }
}

loadBusinesses();
