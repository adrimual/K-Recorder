const express = require('express');
const router = express.Router();

const Song = require('../models/song')


router.get('/comments/:_id',(req,res,next)=>{
    const {_id} = req.params
    Song.findById(_id)
    .populate({
        path: 'comments.userId',
        model: 'User'
      })
    /* .populate('comments.userId') */
    /* .populate({
        path : 'comments' , 
        populate : {
          path : 'userId',
          model:'User'
        }
      }) */

    .then((song) => {
        res.render('comments', {song})
        
    }).catch((err) => {
        console.log(err)
    });
})

// example.es/comments/aklsjdf32kjf21
router.post('/comments/:_id',(req,res,next)=>{
    const {_id} = req.params
    const userId = req.session.currentUser._id
    const {text} = req.body
    const newComment = {userId, text}

    Song.findByIdAndUpdate(_id, {$push:{comments:newComment}} , {new : true} )
    .then((song) => {
        res.redirect('/index')
        /* res.render('comments', {song}) */
    }).catch((err) => {
        console.log(err)
    });
})

module.exports = router;