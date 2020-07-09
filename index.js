import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "./routes";
import models, { sequelize } from "./models";

const app = express();

//Application-level middleware

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

app.use("/session", routes.session);
app.use("/users", routes.user);
app.use("/movies", routes.movies);

const eraseDatabaseOnSync = true;
sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Movies app listening on port ${process.env.PORT}!`)
  );
});
