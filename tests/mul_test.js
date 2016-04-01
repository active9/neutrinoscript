var path = require('path');

describe("Multiply", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/mul/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a multiply statement", function(done) {
    data = data.split('\n');
      expect(data[0]).toEqual(9);
      done();
  });

});