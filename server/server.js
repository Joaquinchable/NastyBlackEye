const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const port = process.env.PORT || 3002;
mongoose.connect(
  process.env.DATABASE,
  {
    useNewUrlParse: true
  },
  err => {
    if (err) return err;
    console.log("conectado a MongoDB");
  }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

const { User } = require("./models/User.js");

const { auth } = require("./middleware/auth");

app.get('/api/users/auth', (req, res) => {
  res.status(200).json({
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    cart: req.user.cart,
    history: req.user.history

  });
});


app.post("/api/users/register", (req, res, next) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      userdata: doc
    });
  });
});

app.post("/api/users/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: "Auth fallida, email no encontrado"
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "Password erroneo" });
    });

    user.generateToken((err, user) => {
      if (err) return res.status(400).send(err);
      console.log(user.token);
      try {
        res
          .cookie("Nasty_auth", user.token)
          .status(200)
          .json({ loginSuccess: true })
        //} catch (err) {
        console.log(err);
      }
    });
  });
});

app.get('/api/user/logout', auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: '' },
    (err, doc) => {
      if (err) return res.json({ success: false, err })
      return res.status(200).json({
        success: true
      })
    }
  )
})



app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
