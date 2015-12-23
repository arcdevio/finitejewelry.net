function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('<div class="logo m-t-32"><object data="/static/images/logo/finite.svg" type="image/svg+xml">&#x2a0d;</object><h1><span class="gold-f">F</span>inite <span class="gold-f">D</span>esigner <span class="gold-f">J</span>ewlery</h1></div><nav class="nav p-16"><ul><li class="active"><a href="/">Home</a></li><li><a href="/jewelry">Jewelry</a></li><li><a href="/about">About</a></li><li><a href="/contact">Contact</a></li></ul></nav>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);