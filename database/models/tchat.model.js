const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tchatSchema = schema({
  content: { 
    type: String, 
    maxlength: [140, 'Tchat trop long' ], 
    minlength: [1, 'Tchat trop court'], 
    required: [true, 'Champ requis'] 
  },
  author: { type: schema.Types.ObjectId, ref: 'user', required: true }
});

const Tchat = mongoose.model('tchat', tchatSchema);

module.exports = Tchat;