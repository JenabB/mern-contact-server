const Contact = require('../models/contactModel');

exports.getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      err: 'server error',
    });
  }
};

exports.getContactById = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found',
      });
    }
    return res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: 'server error',
    });
  }
};

exports.addContact = async (req, res, next) => {
  try {
    const { name, phonenumber, information, group } = req.body;
    const contact = await Contact.create(req.body);

    return res.status(201).json({
      success: true,
      data: contact,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      err: 'server error',
    });
  }
};

// edit contact
// PUT /api/v1/contacts/:id
// public
exports.editContact = async (req, res, next) => {
  Contact.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, editContact) => {
      if (err) {
        res.send(err);
      }

      res.json(editContact);
    }
  );
};

exports.deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'No contact found',
      });
    }

    await contact.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
