var path = require('path');

describe("String Comparison Test", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/strcmp/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a string comparsion", function(done) {
    data = data.split('\n');
      expect(data[0]).toBeTruthy();
      done();
  });

});