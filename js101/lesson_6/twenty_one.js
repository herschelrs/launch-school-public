const readline = require('readline-sync');
const max = 21;
let [playerWins, dealerWins] = [0, 0];

function prompt(str) {
  console.log('=> ' + str);
}

function randomizeArr(array) {
  let newArr = [];
  for (let idx = array.length - 1; idx >= 0; idx -= 1) {
    newArr = newArr.concat(
      array.splice(Math.floor(Math.random() * array.length), 1));
  }
  return newArr;
}

function initializeDeck() {
  let cards = [2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K', 'A'];
  return randomizeArr(cards.concat(cards,cards,cards)); //four copies of all cards
}

function dealHand(deck) {
  return [deck.pop()].concat(deck.pop());
}

function valueOfHand(hand) {
  let [total, aces] = [0, 0];
  hand.forEach(x => {
    if (typeof x === 'number') {
      total += x;
    } else if (['J', 'Q', 'K'].includes(x)) {
      total += 10;
    } else {
      aces += 1;
    }
  });
  if (aces === 0) {
    total += 0; //this is useless, I did this so the linter wouldn't complain
  } else if (total <= max - 11 - aces + 1) {
    total += 11 + aces - 1;
  } else {
    total += aces;
  }
  return total;
}

function isBust(hand) {
  if (hand) {
    return hand > max;
  } else {
    return valueOfHand(hand) > max;
  }
}

function requestInput(requestPrompt, ...validInputs) {
  prompt(requestPrompt + ` (${validInputs.join(', ')})`);
  let answer;
  while (true) {
    answer = readline.question().toLowerCase()[0];
    if (!validInputs.includes(answer)) {
      prompt("Sorry, that's not a valid input. Please choose one of the options: " + `${validInputs.join(', ')}`);
    } else {
      break;
    }
  }
  return answer;
}

function displayPlayerHand(hand) {
  console.log(`You have: ${stringifyHand(hand)}`);
}

function playerTurn(deck, hand) {
  while (true) {
    let answer = requestInput('Would you like to hit or stay?', 'h', 's');
    if (answer === 's') {
      break;
    } else {
      hand = hand.concat(deck.pop());
      displayPlayerHand(hand);
    }
    if (isBust(hand)) {
      break;
    }
  }
  return hand;
}

function dealerTurn(deck, hand) {
  if (valueOfHand(hand) >= 17) {
    return hand;
  }
  while (valueOfHand(hand) < 17) {
    hand = hand.concat(deck.pop());
  }
  return hand;
}

function stringifyHand(hand, isDealer = false) {
  const strings = {2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9',
    J: 'Jack', Q: 'Queen', K: 'King', A: 'Ace'};
  let stringed = hand.map(x => strings[x]);
  if (isDealer) {
    return `${stringed[0]} and unknown card`;
  } else {
    return stringed.slice(0, stringed.length - 1).join(", ") + " and " + stringed[stringed.length - 1];
  }
}

function displayWinner(playerHand, dealerHand, playerValue, dealerValue) {
  if (playerValue > max) {
    console.log('Bust! Dealer won.');
    dealerWins += 1;
  } else if ((dealerValue) > max) {
    console.log('Dealer busted! Player Won!');
    playerWins += 1;
  } else if (playerValue > dealerValue) {
    console.log('Player wins!');
    playerWins += 1;
  } else if (playerValue < dealerValue) {
    console.log('Dealer wins!');
    dealerWins += 1;
  } else {
    console.log('It was a tie!');
  }
  console.log(`You had ${stringifyHand(playerHand)}, summing to ${playerValue}`);
  console.log(`Dealer had ${stringifyHand(dealerHand)}, summing to ${dealerValue}`);
}

function playGame() {
  let deck = initializeDeck();
  let [playerValue, dealerValue] =  [0, 0];
  let [playerHand, dealerHand] = [dealHand(deck), dealHand(deck)];
  console.log(`Dealer has: ${stringifyHand(dealerHand, true)}`);
  displayPlayerHand(playerHand);
  playerHand = playerTurn(deck, playerHand);
  playerValue = valueOfHand(playerHand);
  if (isBust(playerValue)) {
    displayWinner(playerHand, dealerHand, playerValue, dealerValue);
    return undefined;
  }
  dealerHand = dealerTurn(deck, dealerHand);
  dealerValue = valueOfHand(dealerHand);
  displayWinner(playerHand, dealerHand, playerValue, dealerValue);
  return undefined;
}

while (true) {
  playGame();
  if (playerWins === 5) {
    console.log("Player wins best of five!");
    break;
  } else if (dealerWins ===  5) {
    console.log("Dealer wins best of five!");
    break;
  }
  if (requestInput("Would you like to play again?", 'y', 'n') === 'n') {
    break;
  }
}