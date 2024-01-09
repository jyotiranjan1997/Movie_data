const { Movie } = require("../Models/MoviesModel");
const MovieCreate = async (req, res) => {
  try {
    const {MovieName}=req.body;

    const Heading=MovieName.replaceAll(" ","-");
    const movie_data = await Movie.find({ MovieName: req.body.MovieName});
    if (movie_data.length) {
      res.status(400).json({ Result: "Error - Movie already exist !" });
    } else {
      await Movie.create({...req.body,MovieHeading:Heading});
      
      res.status(200).json({ Result: "Movie Create Successfully !" });
    }
  } catch (ex) {
    
    res.status(400).json({ Result: "Error - " + ex.message });
  }
};

const MovieGet = async (req, res) => {
 const {MovieName,page_no,page_size,MovieHeading}=req.body;
 const skip_Pages = (page_no - 1) * page_size;
 var Query={Active:true};
 if(MovieName){
  Query = {
    ...Query,
    MovieName: { $regex: ".*" + MovieName.trim(), $options: "i" },
  };
 }else if(MovieHeading){
  Query={...Query,MovieHeading}
 }
  try {
    if(MovieHeading){
      const moviesData = await Movie.findOne(Query)
      // const totalMovies = await Movie.find(Query).countDocuments();
      res.status(200).json({ Result: moviesData });
    }else{
       const moviesData = await Movie.find(Query).sort({Year:-1}).limit(page_size)
    .skip(skip_Pages ? skip_Pages : 0);;
    const totalMovies = await Movie.find(Query).countDocuments();
    res.status(200).json({ Result: moviesData, totalMovies });
    }
   
  } catch (ex) {
    res.status(400).json({ Result: "Error - " + ex.message });
  }
};

const UpdateMovie = async (req, res) => {
  const { id } = req.params;
  try {
    await Movie.findByIdAndUpdate(id, req.body);
    res.status(200).json({ Result: "Successfully Updated !" });
  } catch (ex) {
    res.status(400).json({ Result: "Error - " + ex.message });
  }
};

const DeleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    await Movie.findByIdAndDelete(id);
    res.status(200).json({ Result: "Movie deleted !" });
  } catch (ex) {
    res.status(400).json({ Result: "Error - " + ex.message });
  }
};

module.exports = { MovieCreate, MovieGet, UpdateMovie, DeleteMovie };
