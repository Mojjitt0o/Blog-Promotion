// 'use strict';
// const { Model, DataTypes } = require('sequelize');

// module.exports = (sequelize) => {
//   class News extends Model {
//     static associate(models) {
//       // Define associations here if needed
//     }
//   }

//   News.init({
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     content: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//   }, {
//     sequelize,
//     modelName: 'News',
//     tableName: 'news', // Pastikan nama tabel sesuai dengan migrasi
//   });

//   return News;
// };


'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class News extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  News.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'News',
    tableName: 'News', // Pastikan nama tabel sesuai dengan migrasi
  });

  return News;
};
