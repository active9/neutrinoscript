var path = require('path');

describe("Comments", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/comments/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a comment statements", function(done) {
      expect(parseInt(data)).toBe(3);
      done();
  });

});