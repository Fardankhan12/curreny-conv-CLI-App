import inquirer from 'inquirer';

console.log("WELCOME TO CURRENCY CONVERTER CLI APP");

const currency :any = {
  usd: 1,
  euro: 0.92,
  inr: 83.46,
  pkr: 278.10,
  dirham: 3.67,
  riyal: 3.75
}


  const amount = await inquirer.prompt([
    {
      name: "from",
      type: "list",
      message: "ENTER THE CURRENCY YOU WANNA CONVERT FROM",
      choices: ["usd", "pkr", "euro", "dirham", "riyal", "inr"]
    },
    {
      name: "to",
      type: "list",
      message: "ENTER THE CURRENCY YOU WANNA CONVERT TO",
      choices: ["usd", "pkr", "euro", "dirham", "riyal", "inr"]
    },
    {
      name: "rem",
      type: "input",
      message: "ENTER THE AMOUNT"
    }
  ]);

  const fromAmount = currency[amount.from];
  const ToAmount = currency[amount.to];
  const main = amount.rem
  const baseAmount = main/fromAmount
  const conv = baseAmount*ToAmount
  console.log(`the amount from ${amount.from} to ${amount.to} is ${conv +amount.to}`)