const mongoose = require('mongoose')

const institutionSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId
    },
    institutionName: {
      type: String,
      required: true,
      unique: true
    },
    address: {
      type: [String],
      required: true
    },
    description: {
      type: String,
      required: true,
      minLength: 0,
      maxLenght: 10000,
      default: 'no description'
    },
    socialCause: {
      type: String,
      required: true,
      minLength: 25,
      maxLenght: 250
    },
    pix: {
      type: Number,
      required: true,
      unique: true
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true
    },
    donorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Donor'
    }
  },
  {
    timestamp: true
  }
)

const Model = mongoose.model('Institution', institutionSchema)

mongoose.exports = Model
