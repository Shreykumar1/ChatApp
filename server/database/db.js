const mongoose = require('mongoose')


const connectDB = async (url) => {
    return await mongoose.connect(url,{
        // useUnifiedTopology: true,
      })
}

module.exports = connectDB