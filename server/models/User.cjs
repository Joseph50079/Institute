

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('student', 'teacher', 'admin'),
      allowNull: false,
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Students',
        key: 'id',
      },
    },
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Teachers',
        key: 'id',
      },
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Admins',
        key: 'id',
      },
    },
  });

  User.associate = (models) => {
    User.belongsTo(models.Student, { foreignKey: 'studentId' });
    User.belongsTo(models.Teacher, { foreignKey: 'teacherId' });
    User.belongsTo(models.Admin, { foreignKey: 'adminId' });
  };

  return User;
};
