// - Dependency
const express = require('express');
const Handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

// - Sets up express app
const app = express();
const PORT = process.env.PORT || 8080;

// - Requires our models for syncing
const db = require('./models');

// - Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// - Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// - Sets handlebars
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
app.engine("handlebars", exphbs({ defaultLayout: "main", handlebars: allowInsecurePrototypeAccess(Handlebars) }));
app.set("view engine", "handlebars");

// Body Parser
// app.use(bodyParser.urlencoded({ extended: false}));

// Routes
require('./routes/project-api-routes.js')(app);

// - Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});

