var path = require('path');

describe("Union Test", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/union/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse an union statement", function(done) {
    data = data.split('\n');
      expect(parseInt(data[0])).toBe(1123477881);
      done();
  });

});