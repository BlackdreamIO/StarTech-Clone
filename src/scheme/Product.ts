import mongoose from 'mongoose';

// Define a schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  brand: String,
  quantity: {
    type: Number,
    default: 0
  },
  images: [String],
  reviews: [
    {
      username: String,
      rating: {
        type: Number,
        min: 1,
        max: 5
      },
      comment: String
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model
export const Product = mongoose.model('Product', productSchema);
