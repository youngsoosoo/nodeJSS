const { DataTypes } = require('sequelize');
const sequelize = require('../../config/DBConfig');
const Member = sequelize.define('Member', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        args: true,
        msg: '올바른 형태의 이메일을 입력해주세요.'
      }
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE
}, {
    tableName: 'member',
    timestamps: true
});

module.exports = Member;
