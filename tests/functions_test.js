var path = require('path');

describe("Functions", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/functions/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a set of functions", function(done) {
      data = data.split('\n');
      expect(data).toEqual([ 'true', 'true', 'false', 'false true', 'false', '' ]);
      done();
  });

});