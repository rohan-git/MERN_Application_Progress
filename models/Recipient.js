const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  clicked: { type: Boolean, default: false }
});

// Not puttin in mongoose as this is a sub-document of the Survey
// module.exports = mongoose.model('Recipient', recipientSchema);

module.exports = recipientSchema;
