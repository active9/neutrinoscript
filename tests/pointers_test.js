var path = require('path');

describe("Pointers", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/pointers/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a few pointers", function(done) {
    data = data.split('\n');
      expect(parseInt(data[0])).toEqual(0);
      done();
  });

});