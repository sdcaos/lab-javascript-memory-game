class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    const cardsCopy = JSON.parse(JSON.stringify(this.cards));

    // shuffle(this.cards);
    // function shuffle(array) {

    var m = cardsCopy.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = cardsCopy[m];
      cardsCopy[m] = cardsCopy[i];
      cardsCopy[i] = t;
    }

    this.cards = cardsCopy;
    // }
    // return array;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;

    if (card1 === card2) this.pairsGuessed++;

    return card1 === card2;
  }

  checkIfFinished() {
    // ... write your code here

    return this.cards.length / this.pairsGuessed === 2;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
