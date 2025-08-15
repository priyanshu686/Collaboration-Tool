import express from 'express';
import dotenv from 'dotenv';
import session from 'express-session';
import cors from 'cors';
import passport from 'passport';

import './config/passport.js'
import authRoutes from './routes/authRoutes.js'
import teamRoutes from './routes/teamRoutes.js'
import dbConnect from './config/db.js';


dotenv.config();

const app = express();

app.use(express.json({ limit: "100mb" })); // For JSON bodies
app.use(express.urlencoded({ extended: true, limit: "100mb" })); // For form submissions
app.use(session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 60000*60
    }
})
)

app.use(passport.initialize());
app.use(passport.session())


app.use('/api/auth',authRoutes);
app.use('/api/teams',teamRoutes);

const PORT = process.env.PORT;

dbConnect().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server start at PORT ${PORT}`);
        
    })
}).catch((err)=>{
    console.log("ERROR :" + err.meesage);
})
