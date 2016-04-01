var path = require('path');

describe("Vector Test", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/vector/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a vector statement", function(done) {
    data = data.split('\n');
      expect(data[0]).toEqual('{x: 10, y: 20}');
      done();
  });

});