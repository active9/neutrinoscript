var path = require('path');

describe("Is Operator", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/is/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse an is operator", function(done) {
      expect(data.replace('\n','').replace('\n','').replace('\n','')).toEqual('true is truetruetrue');
      done();
  });

});