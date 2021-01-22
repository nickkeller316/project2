// Requiring our models
const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Routes
module.exports = (app) => {

  app.get('/findProject', (req, res) => res.redirect('/findProject'));


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

  app.get('/post', (req, res) => res.render('post'));

  app.get('/findProject', (req, res) => res.render('findProject'));

  //Search for projects
  // app.get('/findProject', (req, res) => {
  //   const { term } = req.query;
  //   console.log(term);
  //   // db.Project.findAll({ where: { project_name: { [Op.like]: '%' + term + '%'}}})
  //   //   .then(projects => res.render('index', { projects }))
  //   //   .catch(err => console.log(err));
  // });

  app.post('/post', (req, res) => {
      db.Project.create({
        project_name: req.body.project_name,
        project_status: req.body.project_status,
        project_manager: req.body.project_manager,
        percent_complete: req.body.percent_complete,
        start_date: req.body.start_date,
        due_date: req.body.due_date,
      }).then((data) => 
      res.json(data));
      res.redirect('/');
  });

  app.delete('/all/:id', (req, res) => {
    // Use the sequelize destroy method to delete a record from our table with the
    // id in req.params.id. res.json the result back to the user
    const test = req.params.id;
    console.log(test);
    
    db.Project.destroy({
        where: {
          id: req.params.id,
        },
      }).then(() => res.end());
      res.redirect('/');
  });

  // app.post('/post', (req, res) => {
  //   const { project_name, project_status, project_manager, percent_complete, start_date, due_date} = req.body;
  //   const errors = [];
  //   if(!project_name) {
  //     errors.push({ text: "Please add a project name" });
  //   }
  //   if(!project_status) {
  //     errors.push({ text: "Please add a project status" });
  //   }
  //   if(!project_name) {
  //     errors.push({ text: "Please add a project manager" });
  //   }
  //   if(!project_name) {
  //     errors.push({ text: "Please add a project due date" });
  //   }        
  //   if(errors.length > 0) {
  //     res.render('post', {
  //       errors,
  //       project_name,
  //       project_status,
  //       project_manager,
  //       percent_complete,
  //       start_date,
  //       due_date
  //     });
  //   }
  //   else {
  //     Projects.create({
  //       project_name,
  //       project_status,
  //       project_manager,
  //       percent_complete,
  //       start_date,
  //       due_date
  //     })
  //     .then(post => res.redirect('/all'))
  //     .catch(err => console.log(err));
  //   }
  // });

};
