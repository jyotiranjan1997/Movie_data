const express = require("express");
const MoviesRoute = express.Router();

const {
  MovieCreate,
  MovieGet,
  UpdateMovie,
  DeleteMovie,
} = require("../Controller/MovieController");
const { verifyadmin } = require("../Middleware/verifyadmin");


MoviesRoute.post("/", MovieCreate);
MoviesRoute.post("/getmovies", MovieGet);
MoviesRoute.put("/:id", verifyadmin, UpdateMovie);
MoviesRoute.delete("/:id", verifyadmin, DeleteMovie);

module.exports = { MoviesRoute };
