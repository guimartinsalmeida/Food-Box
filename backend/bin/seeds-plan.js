const mongoose = require('mongoose')
const Plan = require('../models/Plan')

const Plans = [ 

  {
    name: 'Vegan Plan',
    price: 400,
    role:'VEGAN',
    description: 'description de el plan',
    image:'la que sea'
  },
  {
    name: 'Meat Plan',
    price: 400,
    role:'MEAT',
    description: 'description de el plan',
    image:'la que sea'
  },
  {
    name: 'Healthy Plan',
    price: 400,
    role:'HEALTHY',
    description: 'description de el plan',
    image:'la que sea'
  }




]
console.log(process.env.DB)
  mongoose
  .connect ('mongodb+srv://guilherme:<password>@cluster0-15zqb.mongodb.net/test?retryWrites=true&w=majority'), { useNewUrlParser: true }
  .then( () => {
    const planseeds = Plan.create(Plans)
    console.log('PLan Created')
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err)
  })
