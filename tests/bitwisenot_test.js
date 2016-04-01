var path = require('path');

describe("Bitwise Not", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/bitwisenot/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a bitwise not statement", function(done) {
      expect(parseInt(data)).toBe(-14);
      done();
  });

});