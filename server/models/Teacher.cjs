
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Teacher.associate = (models) => {
    Teacher.hasOne(models.User, { foreignKey: 'teacherId' });
  };

  return Teacher;
};
