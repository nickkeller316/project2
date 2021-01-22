# project2

# Project Management Web Application

## Description
Our application offers a project-management tool that allows users to track any ongoing projects for which they are responsible and create new projects.

## Motivation
Real-World needs served as the motivation for our project. One team member is a project manager and needs a tool that will help him stay on top of things. Additionally, we know such projects are in high demand in the real world so we thought it would be a great experience to attempt to create a project-management tool.

## Result
Using Materialize, Handlebars, MySQL and Sequelize, our team built a web application that allows a user to see a brief overview of all projects currently underway for which the user is responsible. Users can also add a new project, which will then display along with their in-progress projects. On load, the application displays information - project name, project status, project manager, percent complete and a due date for any ongoing projects. The user also can create a new project by completing a form that prompts the user for the above information. That information is stored in a database and displayed on homepage along with any other ongoing projects.

## Links
* [Live Webpage](https://floating-wildwood-05165.herokuapp.com/all)
* [Repository](https://github.com/nickkeller316/project2)
* 
## Credits
Nick Leoni: Deserves a big pat on the back as our fearless leader. He not only provided the idea for the project, he also used Materialize and Handlebars to create the front end, wrote the API routes and used MySQL to create the database.
Nick Keller: Created the repo and handled the dates in the application
Nate Miller: Worked on the POST route and tackled administrative tasks.
Michael Li: Uploaded application to Heroku.

## Challenges
As a group we did a lot of spinning our wheels, struggling with things like using a Google calendar API. We also initially struggled with the API routes and integrating our routes with Handlebars. Nate Miller, Nick Keller and Michael Li did much of the wheel-spinning before Nick Leoni helped us salvage our efforts.

## Improvements
The ability for users to modify information about existing projects.
User authentication that will allow multiple users to use the same application while seeing a different set of projects, depending upon each specific user's profile.
