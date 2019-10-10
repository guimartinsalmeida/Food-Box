const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema(
  {
    name: String,
    address: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    
  },
  { timestamps: true }
)



module.exports = mongoose.model('Place', placeSchema)
