// Módulos externos
const inquire = require("inquire");
const { default: chalk } = require("chalk");

// Módulos internos
const fs = require("fs");

const operation = () => {
    inquire
        .prompt([
            {
                type: list,
                name: "operation",
                message: "O que você precisa fazer?",
                choices: [
                    "Criar conta",
                    "Consultar pedido",
                    "Depositar",
                    "Sair",
                ],
            },
        ])
        .then((answers) => {
            const operationSelected = answers.operation;
        })
        .catch((error) => console.log(error));
};
