const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 100
    },
    grade: {
        type: Number,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    misc: {
        type: String,
        maxLength: 255
    }
})

courseSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
  });

module.exports = mongoose.model('Course', courseSchema)