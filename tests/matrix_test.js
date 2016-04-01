var path = require('path');

describe("Matrix", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/matrix/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a matrix free on the z axis", function(done) {
    data = data.split('\n');
      expect(data[0]).toEqual('matrix { m: 2036 } matrix { m: 2018 } matrix {}');
      done();
  });

});