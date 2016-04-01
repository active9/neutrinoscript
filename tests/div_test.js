var path = require('path');

describe("Div", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/div/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse an div equation", function(done) {
      expect(parseInt(data)).toEqual(9);
      done();
  });

});