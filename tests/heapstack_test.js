var path = require('path');

describe("Heapstack", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/heapstack/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a heapstack", function(done) {
      expect(parseInt(data)).toEqual(42);
      done();
  });

});