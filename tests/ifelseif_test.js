var path = require('path');

describe("If ElseIf", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/ifelseif/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse an if elseif statement", function(done) {
      expect(data.match(/else/)[0]).toBe('else');
      done();
  });

});