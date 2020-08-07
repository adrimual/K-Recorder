const mongoose = require('mongoose');
const User = require('../models/user');
const Song = require('../models/song')

const dbName = 'express-cinema-dev'

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });


  const audios = [
      {
        artist: 'Wenceslao',
        userId: {type: Schema.Types.ObjectId, ref: "User"},
        title: 'Chico sin camiseta',
        song: {type: String},
        description:'Dilemma',
        comments:[
          {
            userId :{type: Schema.Types.ObjectId, ref: 'User'},
            text:{type:String}
          }
        ]
      
      },{
        timestamp:true
    
      }
  ]