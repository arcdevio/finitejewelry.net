function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __loadTemplate = __helpers.l,
      ___marginals_header_marko = __loadTemplate(require.resolve("../marginals/header.marko"), require),
      ___marginals_footer_marko = __loadTemplate(require.resolve("../marginals/footer.marko"), require),
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w('<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="Finite Designer Jewlery. Affordable quality jewlery with an edgy hardcore feel."><meta name="author" content="Verge Web Development LLC - Alexander Elias"><meta name="keywords" content><title>' +
      escapeXml(data.title) +
      '</title><link href="/static/angular/1.0.0-angular-material.min.css" rel="stylesheet" type="text/css"><link href="/static/css/master.css" rel="stylesheet" type="text/css"></head><body ng-app="Index" ng-controller="IndexController as IC" ng-cloak><header class="vcp"><div class="vcc">');
    __helpers.i(out, ___marginals_header_marko, data);

    out.w('</div></header><div class="bg"><main class="vcp"><div class="vcc">');
    __helpers.i(out, __loadTemplate(data.includeName, require), data);

    out.w('</div></main><footer class="vcp"><div class="vcc">');
    __helpers.i(out, ___marginals_footer_marko, data);

    out.w('</div></footer></div></body><script src="/static/angular/1.4.8-angular.min.js"></script><script src="/static/angular/1.4.8-angular-animate.min.js"></script><script src="/static/angular/1.4.8-angular-aria.min.js"></script><script src="/static/angular/1.0.0-angular-material.min.js"></script><script src="/static/js/master.js"></script></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);