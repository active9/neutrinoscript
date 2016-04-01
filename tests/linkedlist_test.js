var path = require('path');

describe("Linked List", function() {
  var data = '';

  beforeEach(function(done) {
    neutrino.run(path.resolve('./examples/linkedlist/test.neu'), function(result) {
      data = result;
      done();
    });
  });

  it("should parse a linked list", function(done) {
    data = data.split('\n');
      expect(parseInt(data[0])).toEqual(2046);
      expect(parseInt(data[1])).toEqual(2042);
      expect(parseInt(data[2])).toEqual(2038);
      expect(data[3]).toEqual('Node at address: 2046, has value: 1');
      expect(data[4]).toEqual('Node at address: 2042, has value: 2');
      expect(data[5]).toEqual('Node at address: 2038, has value: 3');
      done();
  });

});