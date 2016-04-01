var path = require('path');

describe("Include Javascript", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/includejs/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse an include javascript file", function(done) {
      expect(parseFloat(data.replace('\n',''))).toBe(574);
      done();
  });

});