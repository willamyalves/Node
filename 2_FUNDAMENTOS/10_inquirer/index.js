const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "nota1",
      message: "Qual a sua nota de matemática?",
    },
    {
      name: "nota2",
      message: "Qual a sua nota de inglês?",
    },
  ])
  .then((answers) => {
    const media = (parseInt(answers.nota1) + parseInt(answers.nota2)) / 2;
    console.log(`A sua média é ${media}`);
  })
  .catch((error) => {
    console.log(error);
  });
