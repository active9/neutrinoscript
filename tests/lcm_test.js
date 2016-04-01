var path = require('path');

describe("LCM", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/lcm/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse an lcm", function(done) {
      expect(parseInt(data.replace('\n',''))).toBe(81);
      done();
  });

});