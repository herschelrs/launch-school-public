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
      console.log('');
      this.playerTurn();
      if (!this.player.isBusted()) {
        this.dealerTurn();
      }
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
    console.log(`The dealer's first card is ${this.dealer.hand[0]}. Your ${this.player.scoreHandToString()}.`);
  }

  playerTurn() {
    let shouldHit = this.player.requestHit(this.deck);
    while (this.player.score() < TwentyOneGame.MAX_SCORE && shouldHit) {
      this.showCards();
      shouldHit = this.player.requestHit(this.deck);
    }
    if (this.player.score() === TwentyOneGame.MAX_SCORE) {
      console.log(`Your score is exactly ${TwentyOneGame.MAX_SCORE}.`);
    } else if (this.player.isBusted()) {
      console.log("You busted!");
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
    let answer = TwentyOneGame.requestInput("Would you like to play again?", 'y', 'n') === 'y';
    console.clear();
    return answer;
  }

  dealerTurn() {
    this.dealer.displayHandAndEnter();
    while (this.dealer.score() < 17) {
      this.dealer.hit(this.deck);
      console.log("The dealer hits.");
      if (this.dealer.isBusted()) {
        console.log("The dealer busted!");
        return;
      }
      this.dealer.displayHandAndEnter();
    }
    this.dealer.stay();
  }

  displayWelcomeMessage() {
    console.log("Welcome to Twenty-One!");
    console.log("You start out with five dollars.");
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
    } else if (this.player.score() < this.dealer.score()) {
      this.player.dollars -= 1;
      return 'dealer';
    } else {
      return "tie";
    }
  }

  displayResult() {
    let winner = this.gameResult();
    if (winner === 'player') {
      console.log("You won!");
    } else if (winner === 'dealer') {
      console.log("Dealer won!");
    } else {
      console.log("It was a tie.");
    }
    console.log(`The dealer's final hand was ${this.dealer.handToString()}, and their score was ${this.dealer.score()}.`);
    console.log(`Your final hand was ${this.player.handToString()}, and your score was ${this.player.score()}. You now have $${this.player.dollars}.`);
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

  scoreHandToString() {
    return `hand is ${this.handToString()}, total score ${this.score()}`;
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

  requestHit(deck) {
    let choice = TwentyOneGame.requestInput("Would you like to hit or stay?", 'h', 's');
    if (choice === 'h') {
      this.hit(deck);
      return true;
    } else {
      return false;
    }
  }
}

class Dealer extends Participant {
  constructor() {
    super();
  }

  stay() {
    console.log("The dealer stays.");
  }

  displayHandAndEnter() {
    console.log(`The dealer's ${this.scoreHandToString()}.`);
    readline.question("Press enter to see the dealer's move.");
  }
}


let game = new TwentyOneGame();
game.start();