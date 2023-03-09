import express from 'express';
import passport, { Passport } from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import expressSession from 'express-session';

const app = express();
const GOOGLE_CLIENT_ID = "937645517026-vp7n8cvd78dg5jqvb4krmolkdkivdul8.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
// const FACEBOOK_CLIENT_ID ='488787252165751';
// const FACEBOOK_CLIENT_SECRET = 'b90f9b57b5b5df5583fbc60f21107c9c';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/google'
},(accessToken, refreshToken, profile, callback)=>{
    callback(null, profile);
}))

// passport.use(new FacebookStrategy({
//     clientID: FACEBOOK_CLIENT_ID,
//     clientSecret: FACEBOOK_CLIENT_SECRET,
//     callbackURL:'/facebook',
//     profileFields: ['emails', 'displayName', 'name', 'picture']
// }, (accessToken, refreshToken, profile, callback)=>{
//     callback(null, profile)
// }))

passport.serializeUser((user,callback)=>{
    callback(null, user);
})

passport.deserializeUser((user, callback)=>{
    callback(null, user);
})

app.use(expressSession({
    secret: 'secret key',
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());
//routes
app.get('/api/google', passport.authenticate('google', {scope:['profile email']}));

app.get('/google', passport.authenticate('google'),(req,res)=>{
    res.redirect('/');
})

app.get('/logout', (req,res)=>{
    req.logout();
    res.redirect('/');
});

app.get('/',(req,res)=>{

    res.send(req.user? req.user: 'Not logged in, login with Google or facebook');
})

app.listen(3000, ()=>{
    console.log('server started on 3004');
})