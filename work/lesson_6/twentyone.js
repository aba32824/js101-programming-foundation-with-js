/**
 * Twenty-one, formerly known as vingt-un in Britain, France and America,
 * is the name given to a family of popular card games of the gambling family,
 * the progenitor of which is recorded in Spain in the early 17th century.
 *
 * More details - https://en.wikipedia.org/wiki/Twenty-One_(banking_game)
 */

const readline = require('readline-sync');

// 'H' stands for Hearts, 'D' for Diamonds, 'C' for Clubs and 'S' for Spades
const SUITS = ['H', 'D', 'C', 'S'];
// They stand for Jack, Queen, King and Ace respectively
const MAJOR_CARDS = ['J', 'Q', 'K', 'A'];
const MAJOR_CARDS_MAP = {
  J: 'Jack',
  Q: 'Queen',
  K: 'King',
  A: 'Ace'
};
const LOWER_VALUE = 2;
const UPPER_VALUE = 10;
const PLAYER_BUST_SCORE = 21;
const DEALER_BUST_SCORE = 17;

const PLAYER = {
  name: 'Player',
  cards: [],
  busted: false,
  scores: 0
};

const DEALER = {
  name: 'Dealer',
  cards: [],
  busted: false,
  scores: 0
};

function isHandPlayer(player) {
  return player.name === 'Player';
}

function isCardValueMajor(value) {
  return MAJOR_CARDS_MAP.hasOwnProperty(value);
}

function getCardValue(value) {
  return isCardValueMajor(value) ? MAJOR_CARDS_MAP[value] : value;
}

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

function doHit(hand, deck) {
  hand.cards.push(deck.shift());
}

function calcCardValue(value) {
  if (value === 'A') return 11;
  if (['J', 'Q', 'K'].includes(value)) return 10;
  return Number(value);
}

function getCountForAces(values) {
  return values.filter(value => value === 'A').lenght;
}

function calcCardTotal(cards, limit) {
  let values = cards.map(card => card[1]);
  let total = values.reduce((acc, value) => acc + calcCardValue(value), 0);

  if (total > limit) {
    let aceCount = getCountForAces(values);
    if (aceCount) total -= aceCount * 10;
  }

  return total;
}

function gotBusted(hand) {
  const limit = (isHandPlayer(hand)) ? PLAYER_BUST_SCORE : DEALER_BUST_SCORE;
  let total = calcCardTotal(hand.cards, limit);
  console.log(`> checking if "${hand.name}" got busted - ${total} scores`);

  if (total > limit) {
    hand.busted = true;
    return true;
  }
  return false;
}

function compareCards() {
  return null;
}

function declareWinner() {
  return null;
}

function displayHandCards(hand, showAllDealerCards = false) {
  let values = [];

  if (hand.name === 'Player') {
    hand.cards.forEach(card => values.push(getCardValue(card[1])));
  }

  if (hand.name === 'Dealer') {
    if (showAllDealerCards) {
      hand.cards.forEach(card => values.push(getCardValue(card[1])));
    } else {
      [getCardValue(hand.cards[0][1], 'unknown card')].forEach(value => {
        values.push(value);
      });
    }
  }

  console.log(`${hand.name} has: ${values.join(' and ')}`);
}

function doPlayerLoop(deck) {
  while (true) {
    console.log('hit or stay?');
    let answer = readline.question('> ').toLowerCase();
    if (answer === 'stay') break;

    doHit(PLAYER, deck);
    displayHandCards(PLAYER);

    if (gotBusted(PLAYER)) {
      console.log(`${PLAYER.name} busted!`);
      console.log(`${DEALER.name} won this turn!`);
      break;
    }
  }
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

  [PLAYER, DEALER].forEach(hand => displayHandCards(hand));
  // Player's loop
  doPlayerLoop(deck);

  // Dealer's loop
  if (!PLAYER.busted) {
    while (true) {
      if (gotBusted(DEALER)) {
        console.log(`${DEALER.name} busted!`);
        console.log(`${PLAYER.name} won this turn!`);
        break;
      }
      console.log('Dealer is OK');
      if (calcCardTotal(DEALER.cards) === DEALER_BUST_SCORE) {
        console.log(`${DEALER.name} wants to stay`);
        break;
      } else {
        doHit(DEALER, deck);
        console.log(`${DEALER.name} did a hit!`);
        continue;
      }
    }
  }

  let showAllDealerCards = true;
  [PLAYER, DEALER].forEach(hand => displayHandCards(hand, showAllDealerCards));
  [PLAYER, DEALER].forEach(hand => {
    console.log(`${hand.name} had ${calcCardTotal(hand.cards)} scores`);
  });

  break;
}