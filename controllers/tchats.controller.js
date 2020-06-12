const { getTchats, createTchat, deleteTchat, getTchat, updateTchat, getCurrentUserTchatsWithFollowing } = require('../queries/tchats.queries');

exports.tchatList = async (req, res, next) => {
  try {
    const tchats = await getCurrentUserTchatsWithFollowing(req.user);
    res.render('tchats/tchat', { tchats, isAuthenticated: req.isAuthenticated(), currentUser: req.user, user: req.user, editable: true });
  } catch(e) {
    next(e);
  }
}

exports.tchatNew = (req, res, next) => {
  res.render('tchats/tchat-form', { tchat: {}, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
}

exports.tchatCreate = async (req, res, next) => {
  try {
    const body = req.body;
    await createTchat({ ...body, author: req.user._id });
    res.redirect('/tchats');
  } catch(e) {
    const errors = Object.keys(e.errors).map( key => e.errors[key].message );
    res.status(400).render('tchats/tchat-form', { errors, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
  }
}

exports.tchatDelete = async (req, res, next) => {
  try {
    const tchatId = req.params.tchatId;
    await deleteTchat(tchatId);
    const tchats = await getCurrentUserTchatsWithFollowing(req.user);
    res.render('tchats/tchat-list', { tchats, currentUser: req.user, editable: true });
  } catch(e) {
    next(e);
  }
}

exports.tchatEdit = async (req, res, next) => {
  try {
    const tchatId = req.params.tchatId;
    const tchat = await getTchat(tchatId);
    res.render('tchats/tchat-form', { tchat, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
  } catch(e) {
    next(e);
  }
}

exports.tchatUpdate = async (req, res, next) => {
  const tchatId = req.params.tchatId;
  try {
    const body = req.body;
    await updateTchat(tchatId, body);
    res.redirect('/tchats');
  } catch(e) {
    const errors = Object.keys(e.errors).map( key => e.errors[key].message );
    const tchat = await getTchat(tchatId);
    res.status(400).render('tchats/tchat-form', { errors, tchat, isAuthenticated: req.isAuthenticated(), currentUser: req.user });
  }
}