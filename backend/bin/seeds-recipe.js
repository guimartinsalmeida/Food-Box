const mongoose = require('mongoose')
const Recipe = require('../models/Recipe')

const Recipes = 
  {
    name: 'Lechuga',
    description: ' description de la lechuga',
    dificult:'EASY',
    role:'VEGAN'
  },
  {
    name: 'Lechuga',
    description: ' description de la lechuga',
    dificult:'EASY',
    role:'VEGAN'
  },
  {
    name: 'Lechuga',
    description: ' description de la lechuga',
    dificult:'EASY',
    role:'VEGAN'
  }




  mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(async () => {
    const user = await Plan.(vegan, vegan.password='1234')
    console.log(`Boss created`)
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err)
  })