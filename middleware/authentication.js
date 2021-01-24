function authenticate (req, res, next)
{
    console.log ("An Authentication Middleware : Executing...");
    next ();
}

module.exports = authenticate;