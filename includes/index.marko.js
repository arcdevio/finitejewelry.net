function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('<style>.bg { background-image: url(\'/static/images/bg.jpg\'); } h1 { text-shadow: #000\n0px 0px 16px;\n}</style><div class="radial-box-dark"><h1>Classic With An Edge</h1><p>Finite Designer Jewelry is about creating unique high quality pieces of jewelry\nusing silver, gold and precious stones that represent valuable beauty at an\naffordable\nprice.</p><a href="/jewelry" class="button-gold">View Jewlery</a></div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);