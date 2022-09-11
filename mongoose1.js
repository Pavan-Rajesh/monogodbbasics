var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitDB");

// defining the model of our fruit
const fruitsSchema = new mongoose.Schema({
  name : String,
  rating : Number,
  review : String
});

//creating collection
const Fruit = mongoose.model("Fruit",fruitsSchema);


//creating objects for our collection
const fruit = new Fruit({
  name : "apple",
  rating:7,
  review:"awesome"
});
//saving out fruit Object() to our fruitdb
fruit.save();
console.log("fruits saved");
