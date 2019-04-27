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

const { Biografia } = require('./models/biografia');

const { Blog } = require('./models/blog')

//Middlewares

const { auth } = require('./middleware/auth');

//const { admin } = require('./middleware/admin');

//Blog

app.post('/api/blog/blogs', auth, (req, res) => {
  const blog = new Blog(req.body);

  blog.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      blogs: doc

    })
  })

});

// 1 id
// /api/product/article?id=HSKKKSKS&type=single
// más de 1 id
// /api/product/article?id=HSKKKSKS,akdjfañjf,kdjfalkñfja&type=dhjfljakhdf&type=array



app.get('/api/blog/blogs_by_id', (req, res) => {
  let type = req.query.type;
  let items = req.query.id;

  if (type === "array") {
    let ids = req.query.id.split(',');
    items = [];
    items = ids.map(item => {
      return mongoose.Types.ObjectId(item);
    })
  }
  Blog.
    find({ '_id': { $in: items } })
    .populate('articulo')
    .exec((err, docs) => {
      return res.status(200).send(docs)
    });


})

//  (Más nuevas)
// blogs ? sortBy=createdAt&order=desc&limit=2

// B (Marticulo del dia)
// blogs ?sortBy=articuloDAy&order=desc&limit=2

app.get('/api/blog/blogs', (req, res) => {
  let order = req.query.order ? req.query.order : 'asc'
  let sortBy = req.query.sortBy ? req.query.sortBy : '_id'
  let limit = req.query.limit ? parseInt(req.query.limit) : 100

  Blog.
    find()
    .populate('articulo')

    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, blogs) => {
      if (err) return res.status(400).send(err)
      res.send(blogs)
    })
})












///Biofotos
app.post('/api/biografia/biografias', auth, (req, res) => {
  const biografia = new Biografia(req.body);

  biografia.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      biografias: doc

    })
  })

});

// 1 id
// /api/product/article?id=HSKKKSKS&type=single
// más de 1 id
// /api/product/article?id=HSKKKSKS,akdjfañjf,kdjfalkñfja&type=dhjfljakhdf&type=array


app.get('/api/bografia/biografias_by_id', (req, res) => {
  let type = req.query.type;
  let items = req.query.id;

  if (type === "array") {
    let ids = req.query.id.split(',');
    items = [];
    items = ids.map(item => {
      return mongoose.Types.ObjectId(item);
    })
  }
  Biografia.
    find({ '_id': { $in: items } })
    .populate('Biofoto')
    .exec((err, docs) => {
      return res.status(200).send(docs)
    })


});

// BY ARRIVAL (Más nuevas)
//biografias?sortBy=createdAt&order=desc&limit=1

// BY day (del dia)
// biografias ? sortBy = biofotoDay & order=desc & limit=4

app.get('/api/biografia/biografias', (req, res) => {
  let order = req.query.order ? req.query.order : 'asc'
  let sortBy = req.query.sortBy ? req.query.sortBy : '_id'
  let limit = req.query.limit ? parseInt(req.query.limit) : 100

  Biografia.
    find()
    .populate('biofoto')

    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, biografias) => {
      if (err) return res.status(400).send(err)
      res.send(biografias)
    })
});







///Articulos
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

//Middleware auth

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

//register

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

///Login

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

//Logout

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
