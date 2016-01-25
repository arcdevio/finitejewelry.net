function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('<style>.bg { background-image: url(\'/static/images/bg.jpg\'); } /*.radial-box-dark {\nmargin-top: 64px; }*/ h1 { text-shadow: #000 0px 0px 16px; } main { height:\n100%;\n}</style><div class="radial-box-dark"><h1>Classic With An Edge</h1><p>Finite Designer Jewelry is about creating unique high quality pieces of jewelry\nusing silver, gold and precious stones that represent valuable beauty at an\naffordable\nprice.</p><a href="/jewelry" class="button-gold">View Jewlery</a></div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);