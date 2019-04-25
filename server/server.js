const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3002;

require("dotenv").config();

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useCreateIndex: true },
  (err) => {
    if (err) return err
    console.log('conectado a MongoDB')
  }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//Modles

const { User } = require('./models/user.js');

const { Biofoto } = require('./models/biofoto');

const { Articulo } = require("./models/articulo");


//Middlewares

const { auth } = require('./middleware/auth');

//const { admin } = require('./middleware/admin');

//Blog

app.post('/api/bLog/articulo', auth, (req, res) => {
  const articulo = new Articulo(req.body);

  articulo.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      articulo: doc
    })
  })
});


app.get('/api/blog/articulos', (req, res) => {
  Articulo.find({}, (err, articulos) => {
    if (err) return res.status(400).send(err)
    res.status(200).send(articulos)
  })
})




///Biofoto
app.post('/api/biofotos/biofoto', auth, (req, res) => {
  const biofoto = new Biofoto(req.body)
  biofoto.save((err, doc) => {
    if (err) return res.json({ success: false, err })
    res.status(200).json({
      success: true,
      biofoto: doc
    });
  });
});

app.get('/api/biofotos/fotografos', (req, res) => {
  Biofoto.find({}, (err, fotografos) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(fotografos)
  })
})

///User

app.get('/api/users/auth', auth, (req, res) => {
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


app.post('/api/users/register', (req, res, next) => {
  // console.log('register')
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true
      //userdata: doc
    });
  });
});


app.post('/api/users/login', (req, res) => {

  User.findOne({ 'email': req.body.email }, (err, user) => {
    if (!user) return res.json({ loginSuccess: false, message: 'Auth fallida, email no encontrado' });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) return res.json({ loginSuccess: false, message: 'Password erroneo' });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        try {
          res.cookie('Nasty_auth', user.token).status(200).json({ loginSuccess: true })
        }

        catch (err) {
          console.log(err);
        }
      });
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
