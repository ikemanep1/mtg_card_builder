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