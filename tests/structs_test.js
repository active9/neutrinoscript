var path = require('path');

describe("Structs Test", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/structs/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a structs", function(done) {
    data = data.split('\n');
      expect(parseInt(data[0])).toBe(0);
      expect(parseInt(data[1])).toBe(42);
      done();
  });

});