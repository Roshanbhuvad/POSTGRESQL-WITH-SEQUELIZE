const { uuid4 } = require("uuid");
const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  return res.send(Object.values(req.context.models.movies));
});

router.get("/:movieId", (req, res) => {
  return res.send(req.context.models.movies[req.params.movieId]);
});

router.post("/", (req, res) => {
  const id = uuid4();
  const message = {
    id,
    text: req.body.text,
    userId: req.context.me.id,
  };
  req.context.models.movies[id] = movies;
  return res.send(movies);
});

router.delete("/:movieId", (req, res) => {
  const {
    [req.params.movieId]: movies,
    ...otherMovies
  } = req.context.models.movies;

  req.context.models.movies = otherMovies;

  return res.send(movies);
});

module.exports = router;
