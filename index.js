'use strict';
const mongoose = require('mongoose'); // pulls mongoose in
const FoodSchema = require('./src/models/food-schema'); // FoodSchema has to be a class
const GenericCollection = require('.');
const foodModel = require('./src/models/food-schema');

const MONGODB_URI = 'mongodb://localhost:27017/food'; // setting up a connection string to connect up to MongoDB

const options = { useNewURLParser: true, useUnifiedTopology: true}//don't read into this, just add them

//This connectus us to the "db-name" database
mongoose.connect(MONGODB_URI, options);

const databaseInteraction = async () => {
  let pizza = {
    name: 'pizza',
    calories: 1200,
    type: 'VEG'
  }
  let newFood = await food.create(pizza);
  console.log('create', newFood);
  
  let oneFood = await food.read(newFood._id);
  console.log('get one food item', oneFood);

  let allFoods = await food.read();
  console.log(allFoods);
}
databaseInteraction();
