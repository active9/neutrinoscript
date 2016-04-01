var path = require('path');

describe("Hello World", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/helloworld/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse Hello World", function(done) {
      expect(data).toEqual('hi');
      done();
  });

});