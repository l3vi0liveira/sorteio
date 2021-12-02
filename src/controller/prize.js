const models = require("../models");

const tablePrize = models.Prizes;
const tableFiles = models.Files;

exports.index = async (req, res) => {
  try {
    const prizes = await tablePrize.findAll();

    return res.json(prizes);
  } catch (error) {
    console.log(JSON.stringify(error, null, 4));
  }
};
exports.create = async (req, res) => {
  const { body, file } = req;

  try {
    const response = await tablePrize.create({
      ...body,
      status: "awating_raffle",
      url: file && `http://localhost:3312/files/${file.filename}`,
    });

    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
};
