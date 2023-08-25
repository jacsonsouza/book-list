import User from '../model/User.js';
import UserBooks from '../model/UserBooks.js';
import { LocalStorage } from 'node-localstorage';
let local = new LocalStorage('./scratch');

class UserController {
  static errors = [];

  static validUser(email, password, passConfirm) {
    if (!email) {
      this.errors.push('E-mail inválido!');
    }

    if (!password) {
      this.errors.push('Senha inválida!');
    }

    if (passConfirm !== password) {
      this.errors.push('Senhas não correspondem!');
    }
  }

  static createUserSave(req, res) {
    const { email, name, password, passConfirm } = req.body;

    this.validUser(email, password, passConfirm);

    if (this.errors.length !== 0)
      return res.status(422).json({ errors: this.errors });

    User.findOne({ where: { email: email } })
      .then((data) => {
        if (data) return res.status(422).json({ msg: 'E-mail já cadastrado!' });
      })
      .catch((error) => console.log(error));

    const user = {
      email: email,
      name: name,
      password: password,
    };

    User.create(user)
      .then(() => {
        res.cookie('logged', 'true');
        res.cookie('user', user.name);
        res.redirect('/');
      })
      .catch((err) => console.log(err));
  }

  static userLogin(req, res) {
    const { email, password } = req.body;

    this.validUser(email, password);

    User.findOne({ where: { email: email } })
      .then((data) => {
        if (!data) {
          return res.status(422).json({ msg: 'Usuário não encontrado!' });
        }

        if (password !== data.password) {
          return res.status(404).json({ msg: 'Senha inválida!' });
        }
        local.setItem('idUser', data.id);
        res.cookie('logged', 'true');
        res.cookie('user', data.name);
        res.redirect('/');
      })
      .catch((err) => console.log('Deu errado' + err));
  }

  static userProfile(req, res) {
    const id = local.getItem('idUser');

    User.findOne({ where: { id: id } })
      .then((data) => {
        return res.json(data);
      })
      .catch((err) => console.log('Deu errado' + err));
  }
}

export default UserController;
