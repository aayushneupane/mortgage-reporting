const { Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Account = sequelize.define(
    "account",
    {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      balance: Sequelize.DECIMAL,
      credit: Sequelize.INTEGER,
      picture: Sequelize.STRING,
      name_first: Sequelize.STRING,
      name_last: Sequelize.STRING,
      employer: Sequelize.STRING,
      email: Sequelize.STRING,
      phone: Sequelize.STRING,
      address: Sequelize.STRING,
      comments: Sequelize.STRING,
      created: Sequelize.DATE,
      tags: {
        type: Sequelize.STRING,
        allowNull: false,
        get() {
          return this.getDataValue("tags").split(";");
        },
        set(val) {
          this.setDataValue("tags", val.join(";"));
        },
      },
    },
    {
      createdAt: false,
    }
  );
  return Account;
};