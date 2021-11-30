module.exports = (sequelize, DataTypes) => {
  const Sort = sequelize.define(
    "Sort",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: "sort",
    }
  );

  Sort.associate = (models) => {
    Sort.belongsTo(models.Prizes, {
      foreignKey: "prizeId",
      as: "prizes",
    });

    Sort.belongsTo(models.Contacts, {
      foreignKey: "contactId",
      as: "contacts",
    });
  };
  return Sort;
};
