// Módulos externos
import inquirer from "inquirer";
import chalk from "chalk";

// Módulos internos
import fs from "fs";

const operation = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "operation",
        message: "O que você precisa fazer?",
        choices: [
          "Criar conta",
          "Consultar saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then((answer) => {
      const operationSelected = answer.operation;

      switch (operationSelected) {
        case "Criar conta":
          createAccount();
          operation();
          break;
        case "Consultar saldo":
          verifyBalance();
          break;
        case "Depositar":
          console.log("Depositar");
          break;
        case "Sacar":
          console.log("Sacar");
          break;
        case "Sair":
          console.log("Sair");
          break;
      }
    })
    .catch((error) => console.log(error));
};

const createAccount = () => {
  console.log(chalk.bgGreen.black("Parabéns por escolher nosso banco"));
  console.log(chalk.green("Defina as opções da sua conta a seguir"));

  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite um nome para a sua conta:",
      },
    ])
    .then((answer) => {
      const accountName = answer.accountName;
      if (!fs.existsSync("./accounts")) {
        fs.mkdirSync("./accounts");
      }
      if (!accountName) {
        console.log(
          chalk.bgRed.black("Por favor, defina um nome para a sua conta")
        );
        return createAccount();
      }
      fs.writeFileSync(`./accounts/${accountName}.json`, '{"balance": 0}');
    })
    .catch((error) => console.log(error));
};

const verifyBalance = () => {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Qual o nome da sua conta?",
      },
    ])
    .then((answer) => {
      const accountName = answer.accountName;

      if (!fs.existsSync(`./accounts/${accountName}.json`)) {
        console.log(chalk.bgRed("Esta conta não existe, escolha outro nome"));
        return verifyBalance();
      }
      if (!accountName) {
        console.log(
          chalk.bgRed.black("Por favor, escreva o nome da sua conta")
        );
        return verifyBalance();
      }
      fs.readFileSync(`./accounts/${accountName}.json`, "utf8", (err, data) => {
        if (err) {
          console.log(err);
        }
        const balance = JSON.parse(data).balance;
        console.log(
          chalk.bgBlue(`Olá, o saldo da sua conta é de R$${balance}`)
        );
        return balance;
      });
    });
};

operation();
