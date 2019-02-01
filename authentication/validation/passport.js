const passport = require('passport');
const local = require('passport-local');
const jwt = require('passport-jwt');
const bcrypt = require('bcrypt')

const { User } = require('../database/userModel.js')


const LocalStrategy = local.Strategy;
const JwtStrategy = jwt.Strategy
const ExtractJwt = jwt.ExtractJwt;


const localOptions = {
    usernameField: 'email'
};

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.JWT_SECRET
}

passport.use(new LocalStrategy(localOptions, async(email, password, done) => {
    try {
        const user = await User.find({email})
        console.log('you heard it her', user)
        if (!user) {
            return done(null, false, {message: 'Incorrect Email'})
        }
        const passwordMatch = await bcrypt.compare(password, user[0].password)
        if (!passwordMatch) {
            return done(null, false, {message: 'Incorrect password'});
        }
        return done(null, user)
    } catch(e) {
        return done(e)
    }
}));


passport.use(new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
    try {
        const user = await User.find({email: jwt_payload.sub})
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    }catch (e) {
        return done(e)
    }
}));







module.exports = passport;