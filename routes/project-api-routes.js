// Requiring our models
const db = require('../models');

// Routes
module.exports = (app) => {
  // GET route for getting all of the todos
  app.get('/all', (req, res) => {
    // findAll returns all entries for a table when used with no options
    
    db.Project.findAll({})
      .then((data) => {
        const jsonValues = JSON.parse(JSON.stringify(data));
        res.render('index', {
          Projects: jsonValues,
        });
    });
  });

  app.post('/post', (req, res) => {
    // findAll returns all entries for a table when used with no options
    
    // db.Project.findAll({})
    //   .then((data) => {
    //     const jsonValues = JSON.parse(JSON.stringify(data));
    //     res.render('index', {
    //       Projects: jsonValues,
    //     });
    // });
  });  

  // app.get('/', (req, res) => res.send('Project'));
};
