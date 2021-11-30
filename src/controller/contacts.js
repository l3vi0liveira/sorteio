const models = require("../models");

const tableContacts = models.Contacts;

exports.create = async (req, res) => {
  const { body } = req;

  try {
    const response = await tableContacts.create(body);

    return response;
  } catch (error) {
    return error;
  }
};
exports.index = async (req, res) => {
  try {
    const response = await tableContacts.findMany();

    return response;
  } catch (error) {
    return error;
  }
};
exports.show = async (req, res) => {
  const { params } = req;

  try {
    const response = await tableContacts.findOne({ where: { id: params.id } });

    return response;
  } catch (error) {
    return error;
  }
};
exports.update = async (req, res) => {
  const { body, params } = req;

  try {
    const response = await tableContacts.findOne({ where: { id: params.id } });
    if (!response) return res.json({ message: "user nor found" });

    tableContacts.update(body, { where: { id: params.id } });

    return response;
  } catch (error) {
    return error;
  }
};
exports.destroy = async (req, res) => {};
