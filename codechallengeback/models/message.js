const message = (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    amount: DataTypes.FLOAT
  });

  Message.associate = models => {
    Message.belongsTo(models.User, {as: 'sender'})
    Message.belongsTo(models.User, {as: 'recipient'})
  };

  return Message;
};

export default message;
