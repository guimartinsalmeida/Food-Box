const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pedidoSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },

    date: {
      type: Date,
      default: Date.now()
    },

    paid: {
      type: String
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Pedido', pedidoSchema)
