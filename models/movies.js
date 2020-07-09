const movies = (sequelize, DataTypes) => {
  const Movies = sequelize.define("movies", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Movies.associate = (models) => {
    Movies.belongsTo(models.User);
  };

  return Movies;
};

export default movies;
