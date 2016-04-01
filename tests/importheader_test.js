var path = require('path');

describe("Import Header", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/importheader/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse an import header", function(done) {
      expect(parseFloat(data.replace('\n','')).toFixed(7)).toBe(''+parseFloat(9.4247778)+'');
      done();
  });

});