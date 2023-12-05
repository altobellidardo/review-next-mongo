import { Schema, model, models } from 'mongoose'

const ReviewSchema = new Schema({
  Restaurant: {
    type: String,
    required: [true, 'Review must have a restaurant'],
    trim: true
  },
  Description: {
    type: String,
    required: [true, 'Review must have a description'],
    trim: true
  },
  Food: {
    type: Number,
    min: 0,
    max: 5,
    required: [true, 'Review must have a food rating']
  },
  Service: {
    type: Number,
    min: 0,
    max: 5,
    required: [true, 'Review must have a service rating']
  },
  'Quality/Price': {
    type: Number,
    min: 0,
    max: 5,
    required: [true, 'Review must have a quality rating']
  },
  Enviroment: {
    type: Number,
    min: 0,
    max: 5,
    required: [true, 'Review must have a enviroment rating']
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Review must belong to a user']
  }
}, {
  timestamps: true
})

export default models.Review || model('Review', ReviewSchema)
