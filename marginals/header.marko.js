function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('<div class="logo"><object data="/static/images/logo/finite.svg" type="image/svg+xml">&#x2a0d;</object></div><div class="title"><h1><span class="gold-f">F</span>inite <span class="gold-f">D</span>esigner <span class="gold-f">J</span>ewlery</h1></div><nav id="menu"><div class="vcp" id="menu-wrap"><div class="vcc"><object id="menuIcon" type="image/svg+xml" data="/static/menu/menuIcon.svg">&#9776;</object><ul id="list"><li ng-class="{active:MC.page === &#39;home&#39;}"><a href="/">Home</a></li><li ng-class="{active:MC.page === &#39;jewelry&#39;}"><a href="/jewelry">Jewelry</a></li><li ng-class="{active:MC.page === &#39;about&#39;}"><a href="/about">About</a></li><li ng-class="{active:MC.page === &#39;contact&#39;}"><a href="/contact">Contact</a></li></ul></div></div></nav>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);