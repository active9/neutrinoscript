var path = require('path');

describe("Include Define", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/includedefine/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse an include define", function(done) {
      expect(JSON.parse(data).name).toEqual('neutrino');
      done();
  });

});