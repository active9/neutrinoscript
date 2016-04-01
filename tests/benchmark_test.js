var path = require('path');

describe("Benchmark", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/benchmark/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse the benchmark test", function(done) {
      expect(data.match(/Structs/)[0]).toBe('Structs');
      expect(data.match(/Objects/)[0]).toBe('Objects');
      done();
  });

});