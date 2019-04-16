const { User } = require("./../models/User");
let auth = (req, res, next) => {

    let token = req.cookies.Nasty_auth

    User.findByToken(token, (err, user) => {

        if (err) throw err
        if (!user) return res.jason({
            isAuth: false,
            error: true,

        })

        req.token = token;
        req.user = user;
        next()

    })

}








module.exports = { auth }