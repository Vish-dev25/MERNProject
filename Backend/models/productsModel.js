const mongoose = require("mongoose");

const productSchema = new mongoose.Schema ({
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
    supplier: 
    { type: String, 
      required: true 
    },
    quantity: 
    { type: Number, 
      required: true 
    },
    status:
    {
      type: Boolean,
      required: true,
      default : false
    }
    
  })

module.exports = mongoose.model('Products', productSchema);