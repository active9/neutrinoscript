var path = require('path');

describe("Enumeration", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/enumeration/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse an enumeration", function(done) {
      expect(data.replace('\n', '')).toBe('0 1 2 3');
      done();
  });

});