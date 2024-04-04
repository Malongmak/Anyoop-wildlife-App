// test.js

const { expect } = require('chai');
const myModule = require('./index'); // Replace './index' with the correct path to your module

describe('My Module', () => {
  it('should return a string', () => {
    const result = myModule();
    expect(typeof result).to.equal('string');
  });
});
