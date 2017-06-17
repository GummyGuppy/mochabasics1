'use strict'

//regular nodejs assert is require('assert')
const assert = require('chai').assert,
      //sayHello = require('../app').sayHello,
      //addNumbers = require('../app').addNumbers
      app = require('../app')

//results
sayHelloResult = app.sayHello()
addNumbersResult = app.addNumbers(5,5)

describe('App', () => {

  it('app should return hello', () => {
    //let result = app.sayHello()
    assert.equal(sayHelloResult, 'hello')
  })

  it('sayHello should return type String', () => {
    //let result = app.sayHello()
    assert.typeOf(sayHelloResult, 'string')
  })

  it('addNumbers should be > 5', () => {
    //let result = app.addNumbers(5,5)
    assert.isAbove(addNumbersResult, 5)
  })


    it('addNumbers should return a number', () => {
      //let result = app.addNumbers(5,5)
      assert.typeOf(addNumbersResult, 'number')
    })

})
