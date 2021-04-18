const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/contactme", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then(() => {
    console.log("DB connected .....");
}).catch((e) => {
    console.log(`Error Dected: ${e}`);
});