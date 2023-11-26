exports.isLoggedIn = function(req, res, next){
    if(req.user){
        next();
    } else{
        return res.status(401).send("bro wyd here no hack pls im simple boy")
    }
}