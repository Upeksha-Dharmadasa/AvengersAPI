const express = require ('express');
const authentication = require ('./middleware/authentication');
const emailsending = require ('./middleware/emailsending');
const avengers = require ("./routes/avengers")
const app = express();
const PORT = 5000;

app.use (express.json()); //used express inbuilt mildware to parse JSON
app.use (authentication);
app.use (emailsending);
app.use ("/api/avengers", avengers);

// get avenger details
app.get ("/", (req, res ) => {
    res.send("Welcome to avengers API");
})

app.listen(PORT, () => {
    console.log ("Started listening on port" + PORT);
})
