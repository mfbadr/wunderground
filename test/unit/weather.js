/* jshint expr:true */
/* global describe, it */
'use strict';

var expect = require('chai').expect;
var Weather = require('../../app/models/weather');

describe('Weather', function (){
  describe('.high', function(){
    it('should return a string with high temp', function(done){
       Weather.high('37212', function(temp){
        expect(temp).to.be.ok;
        expect(temp.length).to.be.above(2);
        expect(temp).to.be.string;
        console.log(temp);
        done();
       });
    });
  });
  describe('.low', function(){
    it('should return a string with low temp', function(done){
      Weather.low('37212', function(temp){
        expect(temp).to.be.ok;
        expect(temp.length).to.be.above(2);
        expect(temp).to.be.string;
        console.log(temp);
        done();
      });
    });
  });
  describe('.avgHigh', function(){
    it('should return a string with avg high', function(done){
      Weather.avgHigh('37212', function(temp){
        expect(temp).to.be.ok;
        expect(temp.length).to.be.above(2);
        expect(temp).to.be.a('string');
        console.log(temp);
        done();
      });
    });
  });
  describe('.avgLow', function(){
    it('should return a string with avg log', function(done){
      Weather.avgLow('37212', function(temp){
        expect(temp).to.be.ok;
        expect(temp.length).to.be.above(2);
        expect(temp).to.be.a('string');
        console.log(temp);
        done();
      });
    });
  });
  describe('.highs', function(){
    it('should return an array of numbers with length 10', function(done){
      Weather.highs('37212', function(temp){
        expect(temp).to.have.length(10);
        expect(temp[0]).to.be.a('number');
        console.log(temp);
        done();
      });
    });
  });
  describe('.lows', function(){
    it('should return an array of numbers with length 10', function(done){
      Weather.lows('37212', function(temp){
        expect(temp).to.have.length(10);
        expect(temp[0]).to.be.a('number');
        console.log(temp);
        done();
      });
    });
  });
  describe('.deltas', function(){
    it('should return the delta of the high and low arrays', function(done){
      Weather.deltas('37212', function(temp){
        expect(temp).to.have.length(10);
        expect(temp[0]).to.be.a('number');
        console.log(temp);
        done();
      });
    });
  });
  describe('.moon', function(){
    it('should return moon phase as a string', function(done){
      Weather.moon('37212', function(moon){
        expect(moon).to.be.a('string');
        console.log(moon);
        done();
      });
    });
  });
});
