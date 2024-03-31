#! /usr/bin/env node
import inquirer from 'inquirer';
let myBalance: number = 1000;
let myPin: number = 1234;
let ans = await inquirer.prompt([{
  type: 'input',
  name: 'pin',
  message: 'Enter your pin'
  }])
if (ans.pin == myPin) {
  console.log('Welcome to your account')
} else {
  console.log('Wrong pin')
  window.stop
}
let operations = await inquirer.prompt([{
  type: 'list',
  name: 'operation',
  message: 'What would you like to do?',
  choices: ['Withdraw', 'Deposit', 'Check Balance', 'Exit']
  
}])
if (operations.operation == 'Withdraw') {
  let amount = await inquirer.prompt([{
    type: 'input',
    name: 'amount',
    message: 'Enter the amount you want to withdraw.'
  }])
if (amount.amount > myBalance) {
    console.log('Insufficient balance')
  } else {
    myBalance -= amount.amount
    console.log(`${amount.amount} is debited from your account. Your new balance is ${myBalance}`)
  }
}
if (operations.operation == 'Deposit') {
  let amount = await inquirer.prompt([{
    type: 'number',
    name: 'amount',
    message: 'Enter the amount you want to deposit.'
  }])
  myBalance += amount.amount
  console.log(`${amount.amount} is credited to your account. Your new balance is ${myBalance}`)
}
if (operations.operation == 'Check Balance') {
  console.log(`Your current balance is ${myBalance}`)
}
if (operations.operation == 'Exit') {
  console.log('Thank you for using our ATM')
}