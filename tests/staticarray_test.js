var path = require('path');

describe("Static Array", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/staticarray/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a static array", function(done) {
    data = data.split('\n');
      expect(parseInt(data[0])).toBe(67108860);
      done();
  });

});