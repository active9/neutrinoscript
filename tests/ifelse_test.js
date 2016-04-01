var path = require('path');

describe("If Else", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/ifelse/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse an if else statement", function(done) {
      expect(data.match(/else/)[0]).toBe('else');
      done();
  });

});