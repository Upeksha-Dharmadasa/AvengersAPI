const express = require ('express');
const mongoose = require ('mongoose')
const authentication = require ('./middleware/authentication');
const emailsending = require ('./middleware/emailsending');

// Create the connection String
mongoose
    .connect ('mongodb://localhost/avengersdb', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true }) 

    .then(() =>console.log ("Connected to DB successfully..."))
    .catch((err) => console.log ("Error has occured while connecting to Database...", err)
    
    );

const avengers = require ("./routes/avengers")
const home = require ('./routes/home')
const app = express();
const PORT = 5000;

app.use (express.json()); //used express inbuilt mildware to parse JSON
app.use (authentication);
app.use (emailsending);
app.use ("/api/avengers", avengers);
app.use ("/", home);


app.listen(PORT, () => {
    console.log ("Started listening on port" + PORT);
})
 