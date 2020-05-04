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

