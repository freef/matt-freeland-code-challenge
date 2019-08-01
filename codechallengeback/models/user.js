const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    credits: {type: DataTypes.FLOAT, defaultValue: 100.000,
     validate: { min: 0}}
  });

  User.associate = models => {
    User.hasMany(models.Message);
  };

  return User;
};

export default user;
