const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    MovieName: { type: String },
    Year: { type: String, required: true },
    Rating: { type: String },
    MovieHeading: { type: String },
    Movie_Description1:{ type: String },
    Movie_Description2:{ type: String },
    Poster: { type: String },
    Movie_ScreenShot:{type:String},
    Movie_Trailer_Link:{type:String},
    Download_Link: {type:String},
    Active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = { Movie };
