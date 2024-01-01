require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const app = express();
const { connect } = require("./src/Config/db");
const { UserRoute } = require("./src/Routes/UserRoute");
const { MoviesRoute } = require("./src/Routes/MoviesRoutes");

app.use(express.json());
app.use(cors());

app.use("/api/user", UserRoute);
app.use("/api/movie", MoviesRoute);

app.listen(PORT, async () => {
  await connect();
  console.log("listening at " + PORT);
});
