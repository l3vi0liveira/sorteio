module.exports = (sequelize, DataTypes) => {
  const Sort = sequelize.define(
    "Sort",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      contactId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          key: "id",
          model: "contacts",
        },
      },
      prizeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          key: "id",
          model: "prizes",
        },
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: "sort",
    }
  );
  Sort.associate = (models) => {
    Sort.belongsTo(models.Contacts, {
      foreignKey: "contactId",
      as: "contacts",
    });
    Sort.belongsTo(models.Prizes, {
      foreignKey: "prizeId",
      as: "prizes",
    });
  };
  return Sort;
};
