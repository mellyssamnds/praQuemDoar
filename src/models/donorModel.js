const mongoose = require('mongoose')

const donorSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Schema.Types.ObjectId
    },
    donorName: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true
    },
    birthDate: {
      type: Number,
      required: true
    },
    cpf: {
      type: Number,
      required: true,
      minLength: 0,
      maxLenght: 11,
      unique: true
    },
    donationAmount: {
      type: Float,
      required: true,
      minLength: 50.0
    }
  },
  {
    timestamp: true
  }
)

const Model = mongoose.model('Donor', donorSchema)

mongoose.exports = Model
