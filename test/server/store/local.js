var path = require('path');
var expect = require('expect.js');
var Local = require('../../../lib/server/store/local');
var CWD = path.resolve(__dirname, '../../fixtures/sample_app');

describe('File store - local', function() {
  beforeEach(function () {
    this.local = new Local({
      cwd: CWD
    });
  });
  
  it('sets the cwd by default', function () {
    expect(this.local.cwd).to.be(CWD);
  });
  
  it('returns the file path', function () {
    expect(this.local.getPath('/path')).to.equal('/path');
  });
});