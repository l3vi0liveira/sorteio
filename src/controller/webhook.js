const axios = require("axios");
const models = require("../models");

const tableContacts = models.Contacts;
const tableWebhooks = models.Webhooks;

const sendMessageConfirm = async (contact) => {
  const message = `Parabéns, você já esta concorrendo ao prêmio. Seu código de sorteio é: ${contact.id}`;

  const url =
    "http://localhost:8080/v1/sorteio-webhook/0e0628ec-04ae-4598-ae24-5037725d5a45";

  await axios.post(url, {
    text: message,
    idFromService: contact.idFromService,
  });
};

exports.webhookDigisac = async (req, res) => {
  const { text, contact, serviceId } = req.body;

  const isContact = await tableContacts.findOne({
    where: { phone: contact.phoneNumber },
  });

  if (isContact) {
    // TODO: não criar o contato novamente
    await sendMessageConfirm(isContact);
    return;
  }

  const contactCreated = await tableContacts.create({
    status: "awating_raffle",
    name: contact.name,
    phone: contact.phoneNumber,
    idFromService: contact.idFromService,
  });

  await sendMessageConfirm(contactCreated);
};
