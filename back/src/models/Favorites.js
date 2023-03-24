const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('favorite', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
      },
      name: {
         type: DataTypes.STRING,
         allowNull:false,
      },
      status: {
         type: DataTypes.ENUM("Alive", "Dead", "unknown"),
         allowNull: false,
      },
      species: {
         type: DataTypes.STRING,
         allowNull:false,
      },
      gender: {
         type: DataTypes.ENUM("Female", "Male", "unknown", "Genderless"),
         allowNull:false,
      },
      origin: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false,
      },
   },
   { timestamps: false}
   );
};

