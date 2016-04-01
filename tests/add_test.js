var path = require('path');

describe("Add", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/add/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse an add equation", function(done) {
      expect(parseInt(data)).toEqual(9);
      done();
  });

});