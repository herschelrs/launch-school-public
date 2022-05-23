const readline = require('readline-sync');

class Deck {
  constructor() {
    this.cards = [];
    this.initializeDeck();
  }

  static cardString = "23456789JQKA";

  initializeDeck() {
    let startDeck = Array(4).fill(Deck.cardString.split('')).flat();
    let newDeck = [];
    while (startDeck.length > 0) {
      let randomIdx = Math.floor(Math.random() * startDeck.length);
      newDeck.push(startDeck.splice(randomIdx, 1));
    }
    this.cards = newDeck.flat();
  }

  deal() {
    if (this.cards.length === 0) {
      this.initializeDeck();
    }
    return this.cards.pop();
  }

  isDeckEmpty() {
    return this.cards.length === 0;
  }
}

class TwentyOneGame {
  constructor() {
    this.player = new Player();
    this.dealer = new Dealer();
    this.deck = new Deck();
  }

  static CARD_VALUES = []
  static MAX_SCORE = 21

  static requestInput(requestPrompt, ...validInputs) {
    console.log(requestPrompt + ` (${TwentyOneGame.joinOr(validInputs, ", ","or")})`);
    let answer;
    while (true) {
      answer = readline.question().toLowerCase()[0];
      if (!validInputs.includes(answer)) {
        console.log("Sorry, that's not a valid input. Please choose one of the options: " + `${TwentyOneGame.joinOr(validInputs, ", ", "or")}`);
      } else {
        break;
      }
    }
    return answer;
  }

  start() {
    this.displayWelcomeMessage();
    do {
      this.dealCards();
      this.showCards();
      this.playerTurn();
      this.dealerTurn();
      this.displayResult();
    } while (!this.isMatchOver() && this.playAgain());
    if (this.isMatchOver()) {
      this.displayMatchResult();
    }
    this.displayGoodbyeMessage();
  }

  dealCards() {
    this.player.resetHand();
    this.dealer.resetHand();
    this.player.hit(this.deck);
    this.player.hit(this.deck);
    this.dealer.hit(this.deck);
    this.dealer.hit(this.deck);
  }

  showCards() {
    console.log(`The dealer's first card is ${this.dealer.hand[0]}. Your hand is ${this.player.handToString()}.`);
  }

  playerTurn() {
    while (this.player.score() < TwentyOneGame.MAX_SCORE) {
      console.log(`Your hand is ${this.player.handToString()}. Your score is ${this.player.score()}.`);
      let choice = TwentyOneGame.requestInput("Would you like to hit?", 'y', 'n');
      if (choice === 'y') {
        this.player.hit(this.deck);
      } else {
        return;
      }
    }
    if (this.player.score() === TwentyOneGame.MAX_SCORE) {
      console.log(`Your score is exactly ${TwentyOneGame.MAX_SCORE}.`);
    }
  }

  isGameOver() {
    if (this.player.dollars === 10 || this.player.dollars === 0) {
      return true;
    } else {
      return false;
    }
  }

  isMatchOver() {
    return (this.player.dollars <= 0) || (this.player.dollars >= 10);
  }

  playAgain() {
    return TwentyOneGame.requestInput("Would you like to play again?", 'y', 'n') === 'y';
  }

  dealerTurn() {
    if (this.player.isBusted()) {
      return;
    }
    while (this.dealer.score() < 17) {
      this.dealer.hit(this.deck);
    }
  }

  displayWelcomeMessage() {
    console.log("Welcome to Twenty-One!");
    console.log("You start out with five dollars.");
    console.log('');
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Twenty-One!");
  }

  displayMatchResult() {
    if (this.player.dollars <= 0) {
      console.log("You're broke!");
    } else {
      console.log("You have $10, you're rich! Game over!");
    }
  }

  gameResult() {
    if (this.player.isBusted()) {
      this.player.dollars -= 1;
      return 'dealer';
    } else if (this.dealer.isBusted()) {
      this.player.dollars += 1;
      return 'player';
    } else if (this.player.score() > this.dealer.score()) {
      this.player.dollars += 1;
      return 'player';
    } else {
      this.player.dollars -= 1;
      return 'dealer';
    }
  }

  displayResult() {
    let winner = this.gameResult();
    if (winner === 'player') {
      console.log("You won!");
    } else {
      console.log("Dealer won!");
    }
    console.log(`Your final hand was ${this.player.handToString()}, and your score was ${this.player.score()}. You now have $${this.player.dollars}.`);
    console.log(`The dealer's final hand was ${this.dealer.handToString()}, and their score was ${this.dealer.score()}`);
  }

  static joinOr(arr, delimiter = ', ', lastWord = 'and') {
    return `${arr.slice(0, arr.length - 1).join(delimiter)} ${lastWord} ${arr[arr.length - 1]}`;
  }
}

class Participant {
  constructor() {
    this.hand = [];
  }

  resetHand() {
    this.hand = [];
  }

  hit(deck) {
    this.hand.push(deck.deal());
  }

  handToString() {
    return TwentyOneGame.joinOr(this.hand);
  }

  score() {
    let [total, aces] = [0, 0];
    this.hand.forEach(x => {
      if ('23456789'.includes(x)) {
        total += Number(x);
      } else if (['J', 'Q', 'K'].includes(x)) {
        total += 10;
      } else {
        aces += 1;
      }
    });
    if (aces === 0) {
      total += 0;
    } else if (total <= TwentyOneGame.MAX_SCORE - 11 - aces + 1) {
      total += 11 + aces - 1;
    } else {
      total += aces;
    }
    return total;
  }

  isBusted() {
    return this.score() > TwentyOneGame.MAX_SCORE;
  }

}

class Player extends Participant {
  constructor() {
    super();
    this.dollars = 5;
  }
}

class Dealer extends Participant {
  constructor() {
    super();
    // stub
  }
}


let game = new TwentyOneGame();
game.start();
// // console.log(game.deck)

// console.log(game.dealer)

// let answer = TwentyOneGame.requestInput("sup", 'y', 'n')

// let someGuy = new Player();
// let myDeck = new Deck();
// someGuy.hit(myDeck);
// console.log(someGuy.isBusted())