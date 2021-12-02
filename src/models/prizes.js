module.exports = (sequelize, DataTypes) => {
  const Prizes = sequelize.define(
    "Prizes",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      url: DataTypes.STRING,
      status: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: "prizes",
    }
  );
  Prizes.associate = (models) => {
    // Prizes.hasOne(models.Sort, {
    //   foreignKey: "id",
    //   as: "sort",
    // });
  };
  return Prizes;
};
