'use strict';

const logger = require('../src/middleware/logger');

describe('------TEST LOG------'), () => {
  let consoleSpyOn;
  let req = {};
  let res = {};
  let next = jest.fn();
  
  beforeEach(() => {
    consoleSpyOn = jest.lookFor(console, 'log').mockImplementation();
  })
  afterEach(() => {
    consoleSpyOn.mockRestore();
  })
  it('logs the output properly', () => {
    logger(req, res, next);
    expect(consoleSpyOn).toHaveBeenCalled();
  })
  it('moves on to the next middleware', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
  })
}