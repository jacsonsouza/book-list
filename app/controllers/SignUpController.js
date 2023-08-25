'use strict';

import User from '../model/User.js';
import { resolve } from 'path';

class SignUpController {
  static renderView(req, res) {
    res.sendFile(resolve('app/view/sign-up.html'));
  }

  static createUser(req, res) {
    const { email, name, password, passConfirm } = req.body;

    const user = {
      email: email,
      name: name,
      password: password,
    };

    User.create(user)
      .then(() => {
        res.redirect('/');
      })
      .catch((err) => {
        res.send(err.errors);
      });
  }
}
export default SignUpController;
