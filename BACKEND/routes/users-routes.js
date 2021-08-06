const express = require('express');

const router = express.Router();

const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Jared Godinez',
  }
]

router.get('/users/:uid', (req, res, next) => {
  const userId = req.params.uid;
  const user = DUMMY_USERS.find(u => {
    return u.id === userId;
  });
  res.json({user});
});

module.exports = router;