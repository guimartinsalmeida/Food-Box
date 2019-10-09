const { Schema, model } = require('mongoose')

const planSchema = new Schema(
  {
    name: String,
    price: Number,
    description: String,
    image: String,
    planes: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },


  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Plan', planSchema)
