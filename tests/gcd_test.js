var path = require('path');

describe("GCD", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/gcd/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a gcd equation", function(done) {
      expect(parseInt(data)).toEqual(9);
      done();
  });

});