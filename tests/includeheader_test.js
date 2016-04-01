var path = require('path');

describe("Include Header", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/includeheader/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse an include header", function(done) {
      expect(parseFloat(data.replace('\n','')).toFixed(7)).toBe(''+parseFloat(9.4247778)+'');
      done();
  });

});