const express = require ("express");
const sequelize = require ("./config/connection");
const path = require ("path");
// const routes = require ("./controllers");
const exphbs = require ("express-handlebars");
const session = require ("express-session");
const SequelizeStore = require ("connect-session-sequelize")(session.Store);
const helpers = require ("./utils/helpers");
const routes = require('./controllers');

require("dotenv").config(); 

const app = express();
const PORT = process.env.PORT || 3001; 

const sess = {
  secret: 'secret pw',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

//handlebars initialization
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//added the public folder so we can use js and css in handlebars
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/static', express.static('public'))


// app.get('/', (req,res) => {
//     res.render('homePage');
// })j  

// app.get('/myPage', (req,res) => {
//   res.render('myPage');
// })

// app.get('/login', (req,res) => {
//   res.render('login');
// })

// app.get('/signup', (req,res) => {
//   res.render('signup');
// })

// Middleware, set static public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// use homepage
// app.use(require('./controllers/homepage-routes'));
// app.use(require('./controllers/contact-routes'));

// app.use(require('./controllers/api/petfinder-routes'));


app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now Listening on ${PORT}`));
  });