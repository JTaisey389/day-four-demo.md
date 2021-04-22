'use strict';

//wrapper for my CRUD Acctions
const foodSchema = require('./food-schema');

class GenericCollection {
  constructor() {
    this.model = foodSchema;
  }
  create(record) { // we can CREATE a new record using the monoose 
    let newRecord = new this.model(record)
    return newRecord.save();
  }
  read(_id){
    if (_id){
      return this.model.findById(_id);
    } else {
      return this.model.find({});
    }
  }
  update(_id, record){
    return this.model.findByIdAndUpdate(_id, record, { new: true })// just makes sure that mongoose returns the new model not the old one

  }
  delete(_id){
    return this.model.findByIdAndDelete(_id);
  }
}

module.exports = GenericCollection;