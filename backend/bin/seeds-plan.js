const mongoose = require('mongoose')
const Plan = require('../models/Plan')

const Plans = [ 

  {
    name: 'Vegan Plan',
    price: 400,
    role:'VEGAN',
    description: 'Este plan envia opciones diversas de recetas veganas ',
    image:'https://res.cloudinary.com/dkc8vtsxn/image/upload/v1570638007/vegan_zshch1.jpg'
  },
  {
    name: 'Meat Plan',
    price: 400,
    role:'MEAT',
    description: 'El plan perfecto para quien le gusta apreciar platos con cortes de carnes',
    image:'https://res.cloudinary.com/dkc8vtsxn/image/upload/v1570638019/meat_o2gmqs.jpg'
  },
  {
    name: 'Healthy Plan',
    price: 400,
    role:'HEALTHY',
    description: 'Este plan te envia platos planeados para que tengas una alimentación balanceada',
    image:'https://res.cloudinary.com/dkc8vtsxn/image/upload/v1570638035/healthy_la3gdu.jpg'
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
