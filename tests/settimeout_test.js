var path = require('path');

describe("setTimeout", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/settimeout/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a few setTimeouts", function(done) {
    data = data.split('\n');
      expect(data[0]).toBeTruthy();
      expect(data[1]).toBeTruthy();
      expect(data[2]).toBeTruthy();
      expect(data[3]).toBeTruthy();
      expect(data[4]).toBeTruthy();
      done();
  });

});