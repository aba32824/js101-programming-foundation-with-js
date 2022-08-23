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
// These are for regular cards (i.e., from 2 till 10)
const LOWER_VALUE = 2;
const UPPER_VALUE = 10;
// Settings for different groups of cards
const MAJOR_CARDS_VALUE = 10;
const ACE_CARD_MAX_VALUE = 11;
const ACE_CARD_REDUCED_VALUE = 10;
// Limits for the punter and delear
const TOTAL_LIMIT_SCORE = 21;
const DEALER_LIMIT_SCORE = 17;

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

function prompt(message) {
  console.log(`=> ${message}`);
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

function dealInitCards(deck) {
  [PLAYER, DEALER].forEach(hand => {
    [1, 2].forEach(_ => hand.cards.push(deck.shift()));
  });
}

function doHit(hand, deck) {
  hand.cards.push(deck.shift());
}

function calcCardValue(value) {
  if (value === 'A') return ACE_CARD_MAX_VALUE;
  if (['J', 'Q', 'K'].includes(value)) return MAJOR_CARDS_VALUE;
  return Number(value);
}

function getCountForAces(values) {
  let aceCount = values.filter(value => value === 'A');
  if (aceCount.length) return aceCount.length - 1;
  return 0;
}

function calcCardTotal(cards) {
  let values = cards.map(card => card[1]);
  let total = values.reduce((acc, value) => acc + calcCardValue(value), 0);

  if (total > TOTAL_LIMIT_SCORE) {
    let aceCount = getCountForAces(values);
    if (aceCount) total -= aceCount * ACE_CARD_REDUCED_VALUE;
  }

  return total;
}

function gotBusted(hand) {
  let total = calcCardTotal(hand.cards);

  if (total > TOTAL_LIMIT_SCORE) {
    hand.busted = true;
    prompt(`"${hand.name}" got busted having ${total} scores`);
    return true;
  }
  return false;
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
      [getCardValue(hand.cards[0][1]), 'unknown card'].forEach(value => {
        values.push(value);
      });
    }
  }

  prompt(`${hand.name} has: [${values.join(' and ')}]`);
}

function displayInitHandsCards() {
  [PLAYER, DEALER].forEach(hand => displayHandCards(hand));
}

function displayFinalHandsCards() {
  [PLAYER, DEALER].forEach(hand => displayHandCards(hand, true));
}

function displayHandsScores() {
  [PLAYER, DEALER].forEach(hand => {
    prompt(`"${hand.name}" won ${hand.scores} round(s).`);
  });
}

function displayTotalScoresForAllPlayers() {
  [PLAYER, DEALER].forEach(hand => {
    let cardTotal = calcCardTotal(hand.cards);
    prompt(`${hand.name} had ${cardTotal} scores`);
  });
}

function getHandWithMaxScore() {
  let highScoreHand = [PLAYER, DEALER].reduce((prev, current) => {
    let totalPrev = calcCardTotal(prev.cards);
    let totalCurrent = calcCardTotal(current.cards);
    return (totalPrev > totalCurrent) ? prev : current;
  });

  return highScoreHand;
}

function displayWinner() {
  let busted = [PLAYER, DEALER].filter(hand => hand.busted)[0];

  if (busted) {
    prompt(`"${busted.name}" busted and loses this round.`);
    let winner = [PLAYER, DEALER].filter(hand => !hand.busted)[0];
    winner.scores += 1;
    prompt(`"${winner.name}" is the winner!`);
    return;
  }

  if (calcCardTotal(PLAYER.cards) === calcCardTotal(DEALER.cards)) {
    prompt("It's a tie!");
  } else {
    let hand = getHandWithMaxScore();
    hand.scores += 1;
    prompt(`The winner is "${hand.name}"`);
  }
}

function doesPlayerWantToStay() {
  let answer;
  do {
    prompt('hit or stay?');
    answer = readline.question('> ').toLowerCase();
    if (answer === 'stay' || answer === 'hit') {
      break;
    } else {
      prompt('Please specify either "hit" or "stay"!');
    }
  } while (true);

  return answer === 'stay';
}

function doPlayerLoop(deck) {
  while (true) {
    if (doesPlayerWantToStay()) break;

    doHit(PLAYER, deck);
    displayHandCards(PLAYER);

    if (gotBusted(PLAYER)) break;
  }
}

function doDealerLoop(deck) {
  while (true) {
    if (gotBusted(DEALER)) {
      break;
    }

    if (calcCardTotal(DEALER.cards) >= DEALER_LIMIT_SCORE) {
      prompt(`${DEALER.name} wants to stay`);
      break;
    } else if (calcCardTotal(DEALER.cards) < DEALER_LIMIT_SCORE) {
      doHit(DEALER, deck);
      prompt(`${DEALER.name} did a hit!`);
      continue;
    }
  }
}

function resetHands() {
  [PLAYER, DEALER].forEach(hand => {
    hand.cards.length = 0;
    hand.busted = false;
  });
}

function playAgain() {
  let flag = false;
  do {
    prompt('Do you want to play again? Answer "y" to continue or "n" to exit');
    let answer = readline.question('> ').toLowerCase();
    if (!['y', 'n'].includes(answer)) {
      prompt('Wrong answer. Please input either "y" or "n"');
      continue;
    }
    if (answer === 'y') {
      resetHands();
      flag = true;
      break;
    }
    if (answer === 'n') break;
  } while (true);

  return flag;
}

function displayGameRules() {
  console.log('*'.repeat(70));
  prompt('The aim is to score exactly twenty-one points or, failing that,');
  prompt('to come as close to twenty-one as possible, based on the card');
  prompt('values dealt. If a player exceeds twenty-one, they lose their');
  prompt('stake. Once every punter has either announced they will stay with');
  prompt('their cards or exceeded twenty-one, the dealer takes his turn.');
  console.log('*'.repeat(70));
}

displayGameRules();
// the main loop
while (true) {
  let deck = initilizeDeck();
  dealInitCards(deck);
  displayInitHandsCards();

  doPlayerLoop(deck);

  if (!PLAYER.busted) doDealerLoop(deck);

  displayWinner();
  displayTotalScoresForAllPlayers();
  displayFinalHandsCards();

  if (!playAgain()) {
    displayHandsScores();
    prompt('Game over. Exiting...');
    break;
  }
  console.clear();
}