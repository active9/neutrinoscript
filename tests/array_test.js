var path = require('path');

describe("Array", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/arrays/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse an array", function(done) {
      expect(parseInt(data)).toEqual(67108664);
      done();
  });

});