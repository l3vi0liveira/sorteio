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
  const { body, file } = req;

  try {
    const response = await tablePrize.create({
      ...body,
      status: "awating_raffle",
      url: file && `http://104.131.23.234:3333/files/${file.filename}`,
    });

    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
};
