
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Student.associate = (models) => {
    Student.hasOne(models.User, { foreignKey: 'studentId' });
  };

  return Student;
};
