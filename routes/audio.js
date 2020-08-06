const express = require('express');
const router = express.Router();

const isLoggedIn = (req, res, next) => {
    if (req.session.currentUser) {
      next();
    }
    else {
        res.redirect("/auth/login");
    }  
  }

router.get('/audio',isLoggedIn,(req,res,next)=>{
    res.render('audio')
})

module.exports = router;