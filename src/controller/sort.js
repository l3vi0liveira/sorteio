const models = require("../models");

const tableSort = models.Sort;
const tableContacts = models.Contacts;
const tablePrizes = models.Prizes;

exports.index = async (req, res) => {
  try {
    const sorts = await tableSort.findAll();

    return res.json(sorts);
  } catch (error) {
    console.log(JSON.stringify(error, null, 4));
  }
};
exports.create = async (req, res) => {
  const { body } = req;

  // TODO: caputurar todos os contatos que ainda nao foram sorteados
  // TODO: capturar 1 premio que ainda não foi sorteado

  // TODO: fazer um random dos contatos
  // TODO: enviar uma mensagem para o contato que foi escolhido

  try {
    const contacts = await tableContacts.findAll({
      where: { status: "awating_raffle" },
    });

    const prize = await tablePrizes.findOne({
      where: { status: "awating_raffle" },
      limit: 1,
    });

    const contactSelected =
      contacts[Math.floor(Math.random() * contacts.length)];

    const sort = await tableSort.create({
      contactId: contactSelected.id,
      prizeId: prize.id,
    });

    // TODO: mudar status do premio e do contato

    return res.json(sort);
  } catch (error) {
    console.log(JSON.stringify(error, null, 4));
    return res.json(error);
  }
};
