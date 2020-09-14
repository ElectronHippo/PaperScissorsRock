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
function init(){ //The function that runs when the body section of the HTML is loaded.//
    while(true){ //Runs forever until it exits with a valid name.//
        name = window.prompt('Enter your name (Must be less than 20 characters)');
        if(name == 'null'){ //If they cancel entering the input, set their name to 'bob'.//
            name = 'bob'
        }
       if(name.split('<').length == 1){ //If there are no opening angled brackets in their name, ie '<'.//
            if(name.length <= 20 && name.length != 0){ //If the inputted message meets all parameters, then return it.//
                defineButtons(); //Exits the function and runs the definebuttons() script.//
                return name;
            }
            else{
                if(name.length > 20){ //If the length of their name exceeds the maximum of 20 characters, tell them no.//
                    alert('Name may not be longer than 20 characters');
                }
                else if(name.length == 0){ //If the person doesnt bother entering a name, give them one.//
                    name = 'bob';
                    defineButtons(); //Exits the function and runs the definebuttons() script.//
                    return name;
                };
            };
        }
        else{ //If there ARE opening angled brackets in their name.//
        alert('You may not put angled brackets into your name');
        };
    };
};
function defineButtons(){ //Defines the buttons used to select the Option.//
    document.getElementById("textArea").innerHTML = name + "'s Score: 0 / 0";
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
            return rules[computerSelection].split('& ')[i] + ' | ' + name + "'s Score: " + playerscore + ' / ' + computerscore; //If the computer wins, return the relevant death message.//
         };
        if (rules[computerSelection].split(' ')[0] == rules[userSelection].split('& ')[i].split(' ')[2]){ //if the computer's choice equals any of the things that the player's choice kills.//
            playerscore +=1; // adds one to the player's score.//
            return rules[userSelection].split('& ')[i] + ' | ' + name + "'s Score: " + playerscore + ' / ' + computerscore; //If the player wins, return the relevant death message.//
         };
        if (computerSelection == userSelection){ //If its a draw.//
            return "It's a draw!" + ' | ' + name + "'s Score: " + playerscore + ' / ' + computerscore; //If its a draw, return 'its a draw'.//
        };
    };
    return "It had no effect!"; //This is in case anyone decides to remove one kill statement, making it unbalanced and therefore occasionally not a win, loss or draw.//
};    
function main(userSelection){ //This is called upon the pressing of a button.
    document.getElementById("textArea").innerHTML = calc(userSelection, computerSelect()); //Sends the output of calc() to the 'textArea' span.//
};  