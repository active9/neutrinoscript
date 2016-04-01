var path = require('path');

describe("Switch Test", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/switch/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a switch statement", function(done) {
    data = data.split('\n');
      expect(data[0].match(/is/)).toBeTruthy();
      done();
  });

});