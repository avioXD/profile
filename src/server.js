const express = require('express');
const hbs = require('hbs');
const app = express();
const path = require('path');
const chalk = require('chalk');


//**Adding hbs engine */
app.set("view engine", "hbs");

//** adding all paths */
const staticPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
//** Declearingg the staic paths */
app.use(express.static(staticPath));
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//** PORT  */
const PORT = process.env.port || 8000;
app.listen(process.env.PORT || 3000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
//** switch pages */

app.get("/", (req, res) => {
    res.render('index');
});
app.get("*", (req, reg) => {
    res.render('error');
})
console.log(chalk.blueBright.underline.inverse(PORT));
console.log('server is running ...');