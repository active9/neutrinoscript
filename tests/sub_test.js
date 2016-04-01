var path = require('path');

describe("Subtraction Test", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/sub/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a subtraction statement", function(done) {
    data = data.split('\n');
      expect(parseInt(data[0])).toBe(9);
      done();
  });

});