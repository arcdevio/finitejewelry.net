function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('<a href="http://verge.website/"><div>&#169; 2015 Verge Web Development LLC</div></a>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);