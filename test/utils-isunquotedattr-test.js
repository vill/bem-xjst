/**
 * regexp for check may attribute be unquoted
 *
 * https://www.w3.org/TR/html4/intro/sgmltut.html#h-3.2.2
 * https://www.w3.org/TR/html5/syntax.html#attributes
 */
var UNQUOTED_ATTR_REGEXP = /^[:\w.-]+$/;

var isUnquotedAttr = function(str) {
  return str && UNQUOTED_ATTR_REGEXP.exec(str);
};

describe('Utils', function() {
  var attrCheck = function attrCheck(str) {
    return !!isUnquotedAttr(str);
  };
  describe('isUnquotedAttr()', function() {
    it('should return true with simple class', function() {
      attrCheck('b').should.equal(true);
    });

    it('should return false with class with space', function() {
      attrCheck('block mixed').should.equal(false);
    });

    it('should return true with class with hyphens', function() {
      attrCheck('b-page').should.equal(true);
    });

    it('should return true with class with uppercase', function() {
      attrCheck('bPage').should.equal(true);
    });

    it('should return true with class with period', function() {
      attrCheck('b.page').should.equal(true);
    });

    it('should return true with class with underscores', function() {
      attrCheck('page__content').should.equal(true);
    });

    it('should return true with class with colons', function() {
      attrCheck('test:test').should.equal(true);
    });

    it('should return false with double quote', function() {
      attrCheck('"test').should.equal(false);
    });

    it('should return true with class with digits', function() {
      attrCheck('color333').should.equal(true);
    });

    it('should return true with class with combination of above', function() {
      attrCheck('b-page__content_test_100').should.equal(true);
    });

    it('should return false with empty string', function() {
      attrCheck('').should.equal(false);
    });
  });
});
