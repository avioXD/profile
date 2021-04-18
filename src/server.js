/** Importing required files */
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const chalk = require('chalk');
require('./db/connect');
const Contact = require('./models/contact');

/** setiing up oprating variables */
const app = express();

/** setting up hbs engine */
app.set("view engine", "hbs");

//** setting up required paths */
const staticPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../template/views");
const partialPath = path.join(__dirname, "../template/partials");

//** declear those static paths in express */

app.use(express.static(staticPath)); /** it will set path to 'project_root/public */
app.set("views", viewPath); /** it will set the views folder path 'project_root/templates/views */
hbs.registerPartials(partialPath); /** it will register those parcels in 'project_root/templates/parcels' folder */



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//** page switch  */

app.get('/', (request, response) => {
    response.render("index");
});
app.get('/youtube', (request, response) => {
    response.render('youtube');
});
app.get('/blog', (request, response) => {
    response.render("blog");
});
app.get('/contactme', (request, response) => {
    response.render('contactme');
})
app.get('*', (request, response) => {
    response.render('404error');
});
//sending post method
app.post("/contactme", async(req, res) => {
    try {
        const user = new Contact({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            gender: req.body.gender,
            comment: req.body.comment
        });
        const Result = await user.save();
        res.status(201).render('index');
    } catch (e) {
        res.status(400).send(`Error ${e}`);
    }

});
//** PORT  */s
const PORT = process.env.PORT || 8000;
app.listen(PORT, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
    console.log('server is running ...');
});