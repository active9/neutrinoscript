var path = require('path');

describe("Linked List Objects", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/linkedlistobjects/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a linked list of objects", function(done) {
    data = data.split('\n');
      expect(parseInt(data[0])).toEqual(0);
      expect(parseInt(data[1])).toEqual(1);
      expect(parseInt(data[2])).toEqual(2);
      expect(parseInt(data[3])).toEqual(3);
      done();
  });

});