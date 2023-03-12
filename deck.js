console.log("Denise Johnson - Game of War!")

//Create Card Class
    class Card {
    constructor(value, suit) {
      this.value = value;
      this.suit = suit;
    }
  } //end Card Class

  //Create Player Class  
  class Player {
    constructor(name, hand, score) {
      this.name = name;
      this.hand = hand;
      this.score = score;
    }
  } //end Player class
  
  //Create Deck class
  class Deck {
    constructor() {
      this.deck = [];
    }
  
    createDeck() {
      const suit = ["Hearts", "Spades", "Clubs", "Diamonds"];
      const value = [
        "A",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
      ];
  
      for (let i = 0; i < suit.length; i++) {
        for (let x = 0; x < value.length; x++) {
          const card = new Card(x + 1, value[x], suit[i]);
          this.deck.push(card); 
        }
      }
    }
  
    shuffle() {
      const shuffledDeck = this.deck;
  
      function shuffleCards() {
        //this function to use for unit testing
        for (let i = shuffledDeck.length - 1; i > 0; i--) {
          const k = Math.floor(Math.random() * (i + 1)); //this is the Fisher-Yates shuffle algorithm
          const temp = shuffledDeck[i];
          shuffledDeck[i] = shuffledDeck[k];
          shuffledDeck[k] = temp;
        }
      }
      shuffleCards();
    }
  } //end Deck class
  
  class Game {
        constructor() {}
      
        playGame() {
          const deck = new Deck();
          deck.createDeck();
          deck.shuffle();
      
          const player1 = new Player("Player One", deck.deck.splice(0, 26), 0); //splits the deck in half
          const player2 = new Player("Player Two", deck.deck, 0);
      
          for (let i = 0; i < player1.hand.length; i++) {
            if (player1.hand[i].value > player2.hand[i].value) {
              //player one wins when they have the larger value card
              player1.score = player1.score + 1;
              console.log("Winner - Player One!");
              console.log(
                "Player One Score - " +
                  player1.score +
                  " : Player Two Score - " +
                  player2.score
              );
              console.log(`
                      `); 
            } else if (player2.hand[i].value > player1.hand[i].value) {
              //player two wins when they have the larger value card
              player2.score = player2.score + 1;
              console.log("Winner - Player Two!");
              console.log(
                "Player One Score - " +
                  player1.score +
                  " : Player Two Score - " +
                  player2.score
              );
              console.log(`
                      `); //space
            } else {
              console.log("It's A Draw! No points earned."); //It's a tie, no score for either player
              console.log(
                "Player One Score - " +
                  player1.score +
                  " : Player Two Score - " +
                  player2.score
              );
              console.log(`
                      `); //space holder
            }
          }
      
          if (player1.score > player2.score) {
            console.log("WINNER: Player One!");
          } else if (player2.score > player1.score) {
            console.log("WINNER: Player Two!");
          } else {
            console.log("Everyone WINS!"); //Game winner
          }
        }
      } //end of the Game class
      
      const game = new Game();
      game.playGame();
      
      const deck = new Deck();
      deck.createDeck();
      deck.shuffle();