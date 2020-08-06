var express = require('express');

var router = express.Router();

const User = require('../models/user');
const Song = require('../models/song');

const isLoggedIn = (req, res, next) => {
    if (req.session.currentUser) {
      next();
    }
    else {
        res.redirect("/auth/login");
    }  
  }

router.get('/userprofile', isLoggedIn,(req,res,next) =>{
    const userId = req.session.currentUser._id;
    let favToPrint = [];
    User.findById(userId)
    .populate({
        path : 'posts',
        model:'Song',
        populate : {
          path : 'comments.userId',
          model: 'User'
        }
      })
    .then((user)=>{
        res.render('profiles/userprofile', {newUser: user})

    })
    .catch((error)=>res.render('profiles/userprofile',{error : `RIP`}) )

})

//delete your own posts

/* router.post('/delete/:id', (req,res,next) => {
  const { id } = req.params
  console.log(req.params)
  console.log("paramss de get ",id);
  Song.findByIdAndDelete(id)
  .then(()=>{
    res.render('users/profile')
  })
  .catch((err) => {console.log(err);
  })
}); */

router.get('/delete/:id', (req, res, next) => {
  const userId = req.session.currentUser._id;
  const songId = req.params.id
  Song.findByIdAndRemove(songId)
      .then((deletedSong) => {
       User.findByIdAndUpdate(userId, {$pull:{posts:songId}}, {new : true})
          .then((updatedUser)=>{
            res.render('profiles/userprofile', {newUser:updatedUser} );

          }) 
      })
      .catch(err => console.log(err));
});


    

module.exports = router;