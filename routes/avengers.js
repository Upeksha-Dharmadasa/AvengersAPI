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

// get all details from DB
router.get ("/", async (req, res) => 
{
    try
    {
        let avengers = await Avenger.find().countDocuments();
        return res.send (avengers.toString())
    }
    catch (ex)
    {
        return res.status(500).send(ex.message);
    }
});

// get by id
router.get ("/:id", (req, res) => 
{ 
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

// update avenger DB
router.put ("/:id", async (req, res) => 
{
    //let avenger = avengerArray.find (avenger => avenger.id == requestedID);

   let requestedID = req.params.id;
   let avenger = await Avenger.findById(requestedID);

    if (!avenger)
    {
        return res
        .status (404)
        .send ("Record you are looking for update is not available")
    }

    avenger.set({ likeCount: req.body.likeCount });
    avenger = await avenger.save();

    return res.send (avenger)

}); 

// Create new avenger
router.post ("/", async (req, res) => 
{
    if(!req.body.name)
    {
        return res.status (400).send ("Why you not send all the values in the request...?")
    }
    /*
    let newAvenger =  
    {
        id: avengerArray.length + 1,
        name: req.body.name,  
    };
    */

    // Create directly to the database
    let newavenger = new Avenger({
        name: req.body.name,
        birthname: req.body.birthname,
        movies: req.body.movies,
        likeCount: req.body.likeCount,
        imageUrl: req.body.imgUrl,
        deceased:  req.body.deceased,
      });
    
      // Add to the database
      try
      {
        newavenger = await newavenger.save();
        return res.send(newavenger);
      }
      
      catch(err)
      {
          return res.status(500).send(err.message);
      }

    /*
    avengerArray.push (newAvenger);
    return res.send (newAvenger); 
    */
    
});

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