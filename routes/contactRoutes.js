const express = require('express');
const router = express.Router();

const {
  getContacts,
  getContactById,
  addContact,
  editContact,
  deleteContact,
} = require('../controllers/contactController');

router.route('/').get(getContacts).post(addContact);

router.route('/:id').get(getContactById).put(editContact).delete(deleteContact);

module.exports = router;
