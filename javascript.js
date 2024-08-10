let humanScore = 0;
let computerScore = 0;

function playGame ()
{
   for (let i = 0; i < 5; i++)
   {
      console.log(`\nRound ${i + 1}:`);
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
   }

  // Declarar el ganador después de 5 rondas
  console.log("\nFinal Scores:");
  console.log(`Human: ${humanScore}`);
  console.log(`Computer: ${computerScore}`);

  if (humanScore > computerScore)
   {
      console.log("Congratulations! You are the overall winner!");
   } else if (humanScore < computerScore) {
      console.log("Computer wins the game. Better luck next time!");
   } else {
      console.log("It's a tie overall!");
   }
}


function playRound(humanChoice, computerChoice)
{
   if (humanChoice === "invalid")
   {
      console.log("Invalid choice. Please choose Rock, Paper or Scissors.");
      return;
   }

   console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);

   if (humanChoice === computerChoice)
   {
      console.log("Tie!");
   }
   else if (
         (humanChoice === "rock" && computerChoice === "scissors") ||
         (humanChoice === "paper" && computerChoice === "rock") ||
         (humanChoice === "scissors" && computerChoice === "paper")
           )

   {
      console.log("You win!");
      humanScore++;
   }
   else
   {
      console.log("Computer wins!");
      computerScore++;
   }

   console.log(`Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
}


function getComputerChoice()
{
   const random = Math.floor(Math.random() * 3);

   if (random === 0)
      {
         return "rock";
      }
   else if (random === 1)
      {
         return "paper";
      }
   else
      {
         return "scissors";
      }
}


function getHumanChoice()
{
   let choice = prompt("Rock, Paper or Scissors?");

   if (choice == null)
   {
      return "invalid";
   }

   choice = choice.toLowerCase();

   if (!(choice === "rock" || choice === "paper" || choice === "scissors"))
   {
      return "invalid";
   }
   else
   {
      return choice;
   }
}

playGame();