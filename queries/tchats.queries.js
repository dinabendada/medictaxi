const Tchat = require('../database/models/tchat.model');

exports.getTchats = () => {
  return Tchat.find({}).exec();
}

exports.createTchat = (tchat) => {
  const newTchat = new Tchat(tchat);
  return newTchat.save();
}

exports.deleteTchat = (tchatId) => {
  return Tchat.findByIdAndDelete(tchatId).exec();
}

exports.getTchat = (tchatId) => {
  return Tchat.findOne({ _id: tchatId }).exec();
} 

exports.updateTchat = (tchatId, tchat) => {
  return Tchat.findByIdAndUpdate(tchatId, { $set: tchat }, { runValidators: true });
}

exports.getCurrentUserTchatsWithFollowing = (user) => {
  return Tchat.find({ author: { $in: [ ...user.following, user._id ] }}).populate('author').exec();
}

exports.getUserTchatsFormAuthorId = (authorId) => {
  return Tchat.find({ author: authorId }).populate('author').exec();
}