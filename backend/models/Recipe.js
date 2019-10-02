const { Schema, model } = require('mongoose');
//const PLM = require('passport-local-mongoose');

const recipeSchema = new Schema(
  {
    name: String,
    description: String,
    dificul:{
      type:String,
      enum:[ 'HARD', 'EASY', 'MEDIUM'],
      default:'EASY'
    },
    role:{
      type:String,
      enum:[ 'VEGAN', 'MEAT', 'HEALTHY'],
      default:'VEGAN'
    },
  },


  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Recipe', recipeSchema);
