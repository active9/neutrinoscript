var path = require('path');

describe("If", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/if/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse an if statement", function(done) {
      expect(data.match(/if/)[0]).toBe('if');
      done();
  });

});