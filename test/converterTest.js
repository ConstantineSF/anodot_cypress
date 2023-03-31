const assert = require('chai').assert;
const converter = require('../converter');
const Converter = require("node-temperature-converter");

const celsius_value = 10
const fahrenheit_value = 10
const rankine_value = 10
const reaumur_value = 10
const kelvin_value = 10

// celsius
const celsius = new Converter.Celsius(celsius_value);
// fahrenheit
const fahrenheit  = new Converter.Fahrenheit(rankine_value);
// kelvin
const kelvin  = new Converter.Kelvin(kelvin_value);
 
describe('Celsius tests', function() {
    it('Celsius -> Fahrenheit', function() {
        assert.equal(converter(celsius_value,0,1), celsius.toFahrenheit())
    })
    it('Celsius -> Rankine', function() {
        assert.equal(converter(celsius_value,0,2), (celsius.toKelvin()*1.8).toFixed(2))
    })
    it('Celsius -> Réaumur', function() {
        assert.equal(converter(celsius_value,0,3), 0.8*celsius_value)
    })
    it('Celsius -> Kelvin', function() {
        assert.equal(converter(celsius_value,0), celsius.toKelvin())
    })
    it('Below absolute zero', function() {
        assert.equal(converter(-273.16,0), 'Below Absolute Zero')
    })
    
})

describe('Fahrenheit tests', function() {
    it('Fahrenheit -> Celsius', function() {
        assert.equal(converter(fahrenheit_value,1,0), fahrenheit.toCelsius().toFixed(7))
    })
    it('Fahrenheit -> Rankine', function() {
        assert.equal(converter(fahrenheit_value,1,2), (fahrenheit.toKelvin()*1.8).toFixed(2))
    })
    it('Fahrenheit -> Réaumur', function() {
        assert.equal(converter(fahrenheit_value,1,3).toFixed(5), (0.8*fahrenheit.toCelsius()).toFixed(5))
    })
    it('Fahrenheit -> Kelvin', function() {
        assert.equal(converter(fahrenheit_value,1).toFixed(2), fahrenheit.toKelvin().toFixed(2))
    })
     it('Below absolute zero test', function() {
        assert.equal(converter(-459.68,1), 'Below Absolute Zero')
    })
    
})