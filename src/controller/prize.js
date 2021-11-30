const models = require("../models");

const tablePrize = models.Prizes;

exports.index = async (req, res) => {
  try {
    const prizes = await tablePrize.findAll();

    return res.json(prizes);
  } catch (error) {
    console.log(JSON.stringify(error, null, 4));
  }
};
exports.create = async (req, res) => {
  const { body } = req;

  try {
    const response = await tablePrize.create(body);

    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
};
