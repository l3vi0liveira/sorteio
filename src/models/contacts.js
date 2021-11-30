module.exports = (sequelize, DataTypes) => {
  const Contacts = sequelize.define(
    "Contacts",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      idFromService: DataTypes.STRING,
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      status: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: "contacts",
    }
  );
  Contacts.associate = (models) => {
    Contacts.hasOne(models.Sort, {
      foreignKey: "id",
      as: "sort",
    });
  };
  return Contacts;
};
