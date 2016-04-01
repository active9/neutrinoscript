var path = require('path');

describe("Swap Test", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/swap/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a swap statement", function(done) {
    data = data.split('\n');
      expect(parseInt(data[0])).toBe(2);
      expect(parseInt(data[1])).toBe(1);
      done();
  });

});