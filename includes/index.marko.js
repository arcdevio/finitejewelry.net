function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('<style>/*.bg { background-image: url(\'/static/images/bg.jpg\'); }*/ /*.radial-box-dark\n{ margin-top: 64px; }*/ h1 { text-shadow: #000 0px 0px 16px; } main { height:\nauto; } main .vcp { display: inline; table-layout: auto; height: auto; } main\n.vcp > .vcc { display: block; position: relative; height: auto; } .index-bg-img\n{ width: 100%; } .index-radial-box-dark-wrap { bottom: 32px; left: 0px;\nz-index: 1; width: 100%; position: absolute; } @media screen and (max-width:\n700px) { .index-bg-img { height: 300px; } .index-radial-box-dark-wrap {\nposition: static; margin: 64px auto; }\n}</style><img class="index-bg-img" src="/static/images/bg.jpg" alt><div class="index-radial-box-dark-wrap"><div class="radial-box-dark"><h1>Classic With An Edge</h1><p>Finite Designer Jewelry is about creating unique high quality pieces of jewelry\nusing silver, gold and precious stones that represent valuable beauty at an\naffordable\nprice.</p><a href="/jewelry" class="button-gold">View Jewlery</a></div></div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);