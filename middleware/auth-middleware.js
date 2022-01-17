const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
const { secret } = require('../config/keys')


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
}

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (pajload, done) => {
            try {
                const user = await User.findById(pajload.id).select('id')
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            } catch (e) {
                console.log(e)
            }
        })
    )
}