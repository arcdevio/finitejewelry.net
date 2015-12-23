function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('<div class="radial-box-light"><h1>About</h1><div class="glass-box p-32 t-l"><p>At Finite Designer Jewelry it is my personal desire is to create objects for\nappreciation and enjoyment by those wearing them and those viewing them in\nmotion. Part of that enjoyment is kinetic in nature due to the fact that many\nhave moving parts. My philosophy is that jewelry is part fashion and part art.\nArt should not just hang on a wall but should be felt and noticed both by\nwearers and observers. It should impact a wide range of people. It should have\na positive impact in\ngeneral.</p><p>My mission is to create limited pieces of valuable items of combinations of\nsilver, gold, and semiprecious\nstone.</p><p>I am open to all forms of suggestions and or collaboration with my clients. I\nhope that by delivering high quality customer service I will build a reputation\nof forging long term repeat relationships built on trust and exceeding\nexpectations.</p></div></div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);