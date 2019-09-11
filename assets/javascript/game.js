

                // Creates an array that lists out all of the options
                var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            
                var wins = 0;
                var losses = 0;
                var userGuess = "";
                // Randomly chooses a choice from the array. Computer's guess.
                var computerGuess = ""
            
                var userChoiceText = document.getElementById("userChoice-text");
                var computerChoiceText = document.getElementById("computerChoice-text");
                var guessesLeft = 10
                var directionText = document.getElementById("directions-text")
                var winText = document.getElementById("wins")
                console.log(winText)
                var loseText = document.getElementById("loses")
                function reset () {
                   guessesLeft
                }
                function winCheck() {

                    // If letters match user wins
                    if (userGuess === computerGuess) {
                        wins++;
                        winText.textContent = wins;
                        
                      } else if (userGuess !== computerGuess) {
                          console.log("false")
                        guessesLeft--;
                        loseText.textContent = losses;
                         /*
                         if guessesLeft = 0 run reset function
                        */

                        if (guessesLeft ===  0 ){
                        guessesLeft.call(reset);
                        }
                        

                      // user guess
                      userChoiceText.textContent = userGuess;
                      computerChoiceText.textContent = computerGuess;
                  }
                }
                // This is run whenever the user presses a key.
                document.onkeyup = function (event) {
                    userGuess = event.key;
                     computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                  // Determines which key was pressed.
                  winCheck()
                  
                  
            
            
                };
            
            
        