const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { user: userModels } = require("../models");

const register = async (req, res, next) => {
  const { nama_user, email, password } = req.body;

  const pwHas = await bcrypt.hash(password, 10);
  console.log("pwHas", pwHas);
  await userModels
    .create({
      nama_user,
      email,
      password: pwHas,
    })
    .then((user) => {
      if (!user) {
        return res.status(500).send({
          message: "Failed to register user",
          data: null,
        });
      }

      return res.status(201).send({
        message: "User successfully registered",
        data: null,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await userModels.findOne({ where: { email } });
  if (!user) {
    return res.status(404).send({ message: "nama/password salah" });
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(404).send({ message: "nama/password salah" });
  }

  const data = {
    id: user.id,
    email: user.email,
  };

  const token = jwt.sign(data, process.env.JWT_SECRET);

  return res.send({
    message: "login berhasil",
    data: { token },
  });
};

module.exports = {
  login,
  register,
};