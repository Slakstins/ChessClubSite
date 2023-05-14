connectionString = 'mongodb+srv://seth:HYnQurBB2bi5dqIP@cluster0.pj9qgkc.mongodb.net/?retryWrites=true&w=majority' 
const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());


mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});