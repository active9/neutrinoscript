var path = require('path');

describe("Module Exports", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/moduleexports/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a module exports", function(done) {
    data = data.split('\n');
      expect(data[0]).toEqual('');
      done();
  });

});