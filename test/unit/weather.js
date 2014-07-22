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
        expect(temp.length).to.be.above(1);
        expect(typeof temp).to.be.string;
        done();
       });
    });
  });
  describe('.low', function(){
    it('should return a string with low temp', function(done){
      Weather.low('37212', function(temp){
      expect(temp).to.be.ok;
      expect(temp.length).to.be.above(1);
      expect(typeof temp).to.be.string;
      done();
      });
    });
  });
});
