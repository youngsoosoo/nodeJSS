require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_USE
});

// (async () => {
//   try {
//     await sequelize.sync({ alter: true }); // 테이블을 강제로 동기화
//     console.log('Database synchronized');
//   } catch (error) {
//     console.error('Unable to sync database:', error);
//   }
// })();

module.exports = sequelize;