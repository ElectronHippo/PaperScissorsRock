//HTML Paper Scissors Rock Lizard Spock by Riley M Bishop.//
rules = [ //Defines the rules of the game.//
    'Rock blunts Scissors & Rock crushes Lizard', 
    'Paper covers Rock & Paper disproves Spock',
    'Scissors cuts Paper & Scissors decapitates Lizard',
    'Lizard eats Paper & Lizard poisons Spock',
    'Spock vaporizes Rock & Spock smashes Scissors'
];
playerscore = 0; //Defines the 'score' variable - this is used to store the players score.//
computerscore = 0; //Defines the 'computerscore' variable - this is used to store the computers score.//
function defineButtons(){ //Defines the buttons used to select the Option.//
    for(i = 0; i != rules.length; i++){ //While i is less than the total lines in 'rules'.//
        buttonName = rules[i].split(' ')[0]; //Defines the name of the button as the first word in the rule at i.//
        document.getElementById('buttonArea').innerHTML += '<button class="button" onclick="main('+ i +')">' + buttonName +'</button> '; //Adds buttons to the 'buttonArea' span. Each button has a different value that it starts main() with. This corresponds to the location of the word on the button in the 'rules' list//
    };
};
function computerSelect(){ //Selects an Option for the computer.//
    computerSelection = Math.floor(Math.random()* rules.length); //Chooses a random number less than or equal to the length of 'rules'.//
    return computerSelection; //Returns the random number.//
};
function calc(userSelection, computerSelection){ //Calculates the victor.//
    for(i = 0; i <= rules[0].split('&').length; i++){ //While the variable i is less than or equal to the number of '&' symbols - This is to cater for more or less 'rules'.//
        if (rules[userSelection].split(' ')[0] == rules[computerSelection].split('& ')[i].split(' ')[2]){ //if the player's choice equals any of the things that the computer's choice kills.//
            computerscore +=1; // adds one to the computer's score.//
            return rules[computerSelection].split('& ')[i] + ' | Score: ' + playerscore + ' / ' + computerscore; //If the computer wins, return the relevant death message.//
         };
        if (rules[computerSelection].split(' ')[0] == rules[userSelection].split('& ')[i].split(' ')[2]){ //if the computer's choice equals any of the things that the player's choice kills.//
            playerscore +=1; // adds one to the player's score.//
            return rules[userSelection].split('& ')[i] + ' | Score: ' + playerscore + ' / ' + computerscore; //If the player wins, return the relevant death message.//
         };
        if (computerSelection == userSelection){
            return "It's a draw!" + ' | Score: ' + playerscore + ' / ' + computerscore; //If its a draw, return 'its a draw'.//
        };
    };
}
function main(userSelection){ //This is called upon the pressing of a button.
    document.getElementById("textArea").innerHTML = calc(userSelection, computerSelect()); //Sends the output of calc() to the 'textArea' span.//
};  