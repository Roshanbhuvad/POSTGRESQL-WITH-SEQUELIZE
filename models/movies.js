const movies = (sequelize, DataTypes) => {
  const Movies = sequelize.define("movies", {
    id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Movies.associate = (models) => {
    Movies.belongsTo(models.User);
  };

  return Movies;
};

module.exports = Movies;
