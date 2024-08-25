import { Sequelize } from "sequelize";

const sequelize = new Sequelize("nodesequelize", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// try {
//   sequelize.authenticate();
//   console.log("Conectamos com sucesso com o Sequelize");
// } catch (error) {
//   console.log("Não foi possível conectar ao servidor: " + error);
// }

export default sequelize;
