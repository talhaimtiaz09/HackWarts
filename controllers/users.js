const User = require('../models/users')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const validator = require('validator')

module.exports = {
    getSignUp: (req, res) => {
        res.render('signUp.ejs')
    },
    getSignIn: (req, res) => {
        res.render('signIn.ejs')
    },
    signingUp: async (req, res) => {
        // console.log(req.body)
        
        const { userName, email, password, password2 } = req.body
        let errors = []

        if(!userName || !email || !password || !password2){
            errors.push({ msg: "Please fill in all fields" })
        }

        if(password !== password2){
            errors.push({ msg: "Passwords do not match" })
        }

        if(password.length < 6){
            errors.push({ msg: "Password should be atleast 6 characters" })
        }

        if(errors.length > 0){
            res.render('signUp', {
                errors,
                userName,
                email,
                password,
                password2
            })
        }
        else{

            User.findOne({ email: email })
            .then(user => {
                if(user) {
                    errors.push({ msg: 'Email is already registered'})
                    res.render('signUp', {
                        errors,
                        userName,
                        email,
                        password,
                        password2
                    })
                }
                else{
                    const newUser = new User({
                        userName,
                        email,
                        password,
                        dashboardAccess: false
                    })

                    // bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
                    //     if(err){
                    //         throw err
                    //     }
                    //     newUser.password = hash
                    // }))
                    newUser.save()
                    .then(user => {
                        res.redirect('/users/signIn')
                    })
                    .catch(err => console.log(err))
                }
            })
        }
    },
    signingIn: (req, res, next) => {
        const validationErrors = []
        if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })
        if (validator.isEmpty(req.body.password)) validationErrors.push({ msg: 'Password cannot be blank.' })
      
        if (validationErrors.length) {
            req.flash('errors', validationErrors)
            return res.redirect('/users/signIn')
        }
        req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })
        
        passport.authenticate('local', (err, user, info) => {
            if (err) { return next(err) }
            // console.log(info)
            // console.log(user)
            if (!user) {
                req.flash('errors', info)
                return res.redirect('/users/signIn')
            }
          req.logIn(user, (err) => {
            if (err) { return next(err) }
            req.flash('success', { msg: 'Success! You are logged in.' })
            res.redirect(req.session.returnTo || '/')
          })
        })(req, res, next)
    },
    
}