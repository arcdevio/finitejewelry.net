function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('<style>/*.bg { background-image: url(\'/static/images/bg.jpg\'); }*/ h1 { text-shadow:\n#000 0px 0px 16px; } main { height: auto; } main { display: inline !important;\ntable-layout: auto !important; height: auto !important; } main > div { display:\nblock !important; position: relative !important; height: auto !important; }\n.index-bg-img { width: 100%; } .index-radial-box-dark-wrap { bottom: 32px;\nleft: 0px; z-index: 1; width: 100%; position: absolute; } @media screen and\n(max-width: 700px) { .index-bg-img { height: 300px; }\n.index-radial-box-dark-wrap { position: static; margin: 64px auto; }\n}</style><img class="index-bg-img" src="/static/images/bg.jpg" alt><div class="index-radial-box-dark-wrap"><div class="radial-box-dark"><h1>Classic With An Edge</h1><p>Finite Designer Jewelry is about creating unique high quality pieces of jewelry\nusing silver, gold and precious stones that represent valuable beauty at an\naffordable\nprice.</p><a href="/jewelry" class="button-gold">View Jewlery</a></div></div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);