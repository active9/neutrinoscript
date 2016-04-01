var path = require('path');

describe("Stack Heap", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/stackheap/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a stack heap", function(done) {
    data = data.split('\n');
      expect(parseInt(data[0])).toBe(1);
      expect(parseInt(data[1])).toBe(2);
      expect(parseInt(data[2])).toBe(2050);
      done();
  });

});