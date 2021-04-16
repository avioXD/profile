/** Importing required files */
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const chalk = require('chalk');




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

//** page switch  */

app.get('/', (request, response) => {
    response.render("index");

});
app.get('/about', (request, response) => {
    response.render('about');
});
app.get('/blog', (request, response) => {
    response.render('blog');
});;
app.get('*', (request, response) => {
    response.render('404error');
});

//** PORT  */s
const PORT = process.env.PORT || 3003;
app.listen(PORT, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
    console.log('server is running ...');
});