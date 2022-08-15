/**
 * Twenty-one, formerly known as vingt-un in Britain, France and America,
 * is the name given to a family of popular card games of the gambling family,
 * the progenitor of which is recorded in Spain in the early 17th century.
 * 
 * More details - https://en.wikipedia.org/wiki/Twenty-One_(banking_game)
 */

// 'H' stands for Hearts, 'D' for Diamonds, 'C' for Clubs and 'S' for Spades
const SUITS = ['H', 'D', 'C', 'S'];
// They stand for Jack, Queen, King and Ace respectively
const MAJOR_CARDS = ['J', 'Q', 'K', 'A'];
const TOTAL_VALUE_CARDS = 9;
const LOWER_VALUE = 2;
const UPPER_VALUE = 10;

const PLAYER = {
  cards: [],
  scores: 0
};

const DEALER = {
  cards: [],
  scores: 0
};

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; // swap elements
  }
  return deck;
}

function initilizeDeck() {
  let deck = [];

  SUITS.forEach(suit => {
    MAJOR_CARDS.forEach(card => deck.push([suit, card]));
    for (let value = LOWER_VALUE; value <= UPPER_VALUE; value++) {
      // NOTE: that's the recommendation to follow - keep all values as strings
      deck.push([suit, String(value)]);
    }
  });

  return shuffle(deck);
}

function dealCards() {
  return null;
}

function doHit() {
  return false;
}

function doStay() {
  return false;
}

function gotBusted() {
  return true;
}

function compareCards() {
  return null;
}

function declareWinner() {
  return null;
}

// the main loop
while (true) {
  let deck = initilizeDeck();
  console.log(`> card deck ${JSON.stringify(deck)}`);
  console.log(`> card deck size ${deck.length}`);

  [PLAYER, DEALER].forEach(hand => {
    [1, 2].forEach(_ => hand.cards.push(deck.shift()));
  });

  console.log(`> card deck size ${deck.length}`);
  console.log(`> PLAYER - ${JSON.stringify(PLAYER)}`);
  console.log(`> DEALER - ${JSON.stringify(DEALER)}`);
  break;
}