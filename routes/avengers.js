const express = require ("express");
const router = express.Router();
const Avenger = require ("../models/avenger") // Import the model created for the schema

let avengerArray = 
[
    {id: 1, name: "Iron Man"},
    {id: 2, name: "Captain America"},
    {id: 3, name: "Thor"},
    {id: 4, name: "Black widow"}
];

// get all details
router.get ("/api/avengers", (req, res) => {
    res.send (avengerArray)
})

// get by id
router.get ("/:id", (req, res) => {
    
    //send avenger details for the requested id
    let requestedID = req.params.id;
    let avenger = avengerArray.find (avenger => avenger.id == requestedID);
    
    if (!avenger)
    {
        return res
        .status (404)
        .send ("Avenger you are looking for is not available")
    }
    res.send (avenger);
})

// update avenger
router.put ("/:id", (req, res) => 
{

    let requestedID = req.params.id;
    let avenger = avengerArray.find (avenger => avenger.id == requestedID);
    if (!avenger)
    {
        return res
        .status (404)
        .send ("Avenger you are looking for update is not available")
    }

    avenger.name = req.body.name;
    return res.send (avenger)

}); 

// Create new avenger
router.post ("/", (req, res) => 
{
    if(!req.body.name)
    {
        return res.status (400).send ("Why you not send all the values in the request...?")
    }
    let newAvenger =  
    {
        id: avengerArray.length + 1,
        name: req.body.name,  
    };

    avengerArray.push (newAvenger);
    return res.send (newAvenger);
    
})

// Delete
router.delete ("/:id", (req, res) => 
{
    let avenger = avengerArray.find ((b) => b.id == req.params.id);
    if (!avenger)
    {
        res.status (404).send ("The avenger you requested does not exist...")
        return;
    }

    let indexofAvenger = avengerArray.indexOf (avenger);
    avengerArray.splice (indexofAvenger, 1);

    res.send (avenger);
});

module.exports = router;