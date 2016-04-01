var path = require('path');

describe("Struct Union Pointer Test", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/structunionpointer/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a struct union pointer", function(done) {
    data = data.split('\n');
      expect(parseInt(data[0])).toBe(42);
      expect(parseInt(data[1])).toBe(1);
      expect(parseInt(data[2])).toBe(12);
      expect(parseInt(data[3])).toBe(12);
      done();
  });

});