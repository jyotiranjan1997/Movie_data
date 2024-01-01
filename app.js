require("dotenv").config();
const express = require("express");
const { MongoClient } = require('mongodb');
const cors = require("cors");
const PORT = process.env.PORT;
const app = express();
const { connect } = require("./src/Config/db");
const { UserRoute } = require("./src/Routes/UserRoute");
const { MoviesRoute } = require("./src/Routes/MoviesRoutes");
const { ContactRoute } = require("./src/Routes/ContactRoute");

app.use(express.json());
app.use(cors());

app.use("/api/user", UserRoute);
app.use("/api/movie", MoviesRoute);
app.use("/api/contact", ContactRoute);

app.listen(PORT, async () => {
  await connect();
  console.log("listening at " + PORT);
});

// client.connect(err => {
//   if(err){ console.error(err); return false;}
//   // connection to mongo is successful, listen for requests
//   app.listen(PORT, () => {
//       console.log("listening for requests");
//   })
// });