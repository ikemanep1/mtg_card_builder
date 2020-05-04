// Business logic for CardBinder
function CardBinder () {
    var cards = [];
    var currentId = 0;
}

CardBinder.prototype.addCard = function (card) {
    card.id = this.assignId();
    this.cards.push(card);
}

CardBinder.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

CardBinder.prototype.findCard = function(id) {
    for (var i=0; i < this.cards.length; i++) {
        if (this.cards[i]) {
            if (this.cards[i].id == id) {
                return this.cards[i];
            }
        }
    };
    return false;
}

CardBinder.prototype.deleteCard = function(id) {
    for (var i=0; i < this.cards.length; i++) {
        if (this.cards[i]) {
            if (this.cards[i].id == id) {
                delete this.cards[i];
                return true;
            }
        }
    };
    return false; 
}

// Business Logic for Cards

function Card (name, type, color, cost) {
    this.name = name,
    this.type = type,
    this.color = color,
    this.cost = cost
}

// UI logic

var cardBinder = new CardBinder();

function displayCardDetails(CardBinderToDisplay) {
    var cardsList = $("ul#cards");
    var htmlForCardInfo = '';
    CardBinderToDisplay.cards.forEach(function(card) {
        htmlForCardInfo += "<li id=" + card.id + ">" + card.name + " " + card.type + " " + card.color + " " + card.cost + "</li>";
    });
    cardsList.html(htmlForCardInfo);
};

function showCard(cardId) {
    var card = cardbinder.findCard(cardId);
    $('#show-card').show();
    $(".name").html(contact.name);
    $(".type").html(contact.type);
    $(".color").html(contact.color);
    $(".cost").html(contact.cost);
    var buttons = $('#buttons');
    buttons.empty();
    buttons.append("<button class='deleteButton' id=" +  + card.id + ">Delete</button>");
}