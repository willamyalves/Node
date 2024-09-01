import User from "../models/User.mjs";

export default class UserController {
  static async register(req, res) {
    const { name, email, password, confirmpassword, phone, image } = req.body;

    if (!name) {
      res.status(422).json({ message: "O nome é obrigatório" });
      return;
    }
    if (!email) {
      res.status(422).json({ message: "O e-mail é obrigatório" });
      return;
    }
    if (!password) {
      res.status(422).json({ message: "A senha é obrigatória" });
      return;
    }
    if (!confirmpassword) {
      res.status(422).json({ message: "A confirmação de senha é obrigatória" });
      return;
    }
    if (!phone) {
      res.status(422).json({ message: "O número de telefone é obrigatório" });
      return;
    }

    if (password !== confirmpassword) {
      res.status(422).json({ message: "As senhas não são iguais" });
      return;
    }

    await res.json({ message: "Apenas um teste" });
  }
}
