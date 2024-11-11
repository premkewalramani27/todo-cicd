//start express
import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

//cookie parsers 
app.use(express.json());
app.use(express.urlencoded({extended : true }));
app.use(cookieParser());

// Get __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//static public folder
app.use(express.static(path.join(__dirname,'public')));

//setting up ejs
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render("index.ejs");
});

app.get('/mylist',(req,res)=>{
    res.render('mylist.ejs');
});

app.get('/login',(req,res)=>{
    res.render('login.ejs');

});

app.get('/signup',(req,res)=>{
    res.render('signup.ejs');
});

app.get('/profile/:username', (req, res) => {
    const username = req.params.username; // Get the username from the URL
    res.send('profile');
    console.log(`Profile page for user: ${username}`); // Respond with a message including the username
});

//start server 
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
});