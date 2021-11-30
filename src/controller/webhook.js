const axios = require("axios");
const models = require("../models");

const tableContacts = models.Contacts;
const tableWebhooks = models.Webhooks;

const sendMessageConfirm = async (contact) => {
  const message = "Parabéns, você já esta concorrendo ao premio.";

  const url =
    "http://localhost:8080/v1/sorteio-webhook/b18f1a3d-bf90-4e00-a784-b4a0dc78484d";

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
