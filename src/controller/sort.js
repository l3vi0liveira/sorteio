const axios = require("axios");
const models = require("../models");

const tableSort = models.Sort;
const tableContacts = models.Contacts;
const tablePrizes = models.Prizes;

const sendMessageConfirmPrize = async (contact, prize) => {
  const message = `Parabéns participante ${contact.id}, você foi sorteado com o prêmio: ${prize.name}!!!`;

  const url =
    "http://localhost:8080/v1/sorteio-webhook/b18f1a3d-bf90-4e00-a784-b4a0dc78484d";

  await axios.post(url, {
    text: message,
    idFromService: contact.idFromService,
  });
};

exports.index = async (req, res) => {
  try {
    const sorts = await tableSort.findAll({ include: ["prizes", "contacts"] });

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

    if (!contacts.length)
      return res.json({ code: 1, message: "nenhum contatos encontrado" });
    if (!prize)
      return res.json({ code: 2, message: "nenhum premio encontrado" });

    const contactSelected =
      contacts[Math.floor(Math.random() * contacts.length)];

    const sort = await tableSort.create({
      contactId: contactSelected.id,
      prizeId: prize.id,
    });

    // TODO: mudar status do premio e do contato
    await tableContacts.update(
      { status: "done" },
      { where: { id: contactSelected.id } }
    );
    await tablePrizes.update({ status: "done" }, { where: { id: prize.id } });

    await sendMessageConfirmPrize(contactSelected, prize);

    const result = await tableSort.findOne({
      where: { id: sort.id },
      include: ["prizes", "contacts"],
    });

    return res.json(result);
  } catch (error) {
    console.log(JSON.stringify(error, null, 4));
    return res.json(error);
  }
};
