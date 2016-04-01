var path = require('path');

describe("If ElseIf Else", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/ifelseifelse/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse an if elseif else statement", function(done) {
      expect(data.match(/else/)[0]).toBe('else');
      done();
  });

});