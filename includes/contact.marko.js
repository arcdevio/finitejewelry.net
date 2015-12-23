function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('<div class="radial-box-light"><h1>Contact Us</h1><div class="glass-box p-16" layout="row" layout-align="center center"><div class="m-r-32" layout="column"><p>Phone:</p><p><a class="phone-number" href="tel:15200000000" itemprop="telephone">520-000-0000</a></p></div><div class="m-l-32" layout="column"><p>Hours:</p><p><span>M-F &amp; 9-5</span></p></div></div><form class="contactForm glass-box p-16" layout="column" method="post"><div class="responseText"></div><div layout="column" layout-gt-xs="row" layout-align="center center"><input type="text" name="firstName" placeholder="First Name" flex layout-margin><input type="text" name="lastName" placeholder="Last Name" flex layout-margin></div><div layout="column" layout-gt-xs="row" layout-align="center center"><input type="email" name="email" placeholder="Email Address" flex required="true" layout-margin><input type="telephone" name="phone" placeholder="Phone Number" flex layout-margin></div><div layout="row" layout-align="center"><input class="button-gold" type="button" value="Send" name="button" layout-margin></div></form></div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);