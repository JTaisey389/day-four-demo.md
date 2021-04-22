'use strict';

require('@code-fellows/supergoose'); // this pulls in and configures an runs momgo memory server and supertest

const GenericCollection = require('') // check file path

const food = new GenericCollection();

describe('Food Actions', () => {
    it('can create() a new food item', () => {
      let object = { name: 'test food 1', calories: 9999, type: 'FRUIT'};
      let expected = { name: 'test food 1', calories: 1234, type: 'FRUIT'}
      return object.create(object)
      .then(reccord => {
        // in general, review this technique for similar object comparison
        Object.keys(object).forEach(item => {
          expect(reccord[item]).toEqual(expected[item]);
        })
      })
    })

    it('can read() a new food items', () => {
      let obj = { name: 'test food 2', calories: 9999, type: 'VEG'};
      let expected = { name: 'test food 2', calories: 1234, type: 'VEG'}
      
      return food.create(obj)
      .then(record => {
        return food.reccord(record._id)
          .then(item => {
            Object.keys(object).forEach(item => {
              expect(record[item]).toEqual(expected[item]);
            })
          })
      })
    })
})
    // it('can create() a new food item', () => {

    // })
    // it('can create() a new food item', () => {

    // })
    // it('can create() a new food item', () => {

    // })