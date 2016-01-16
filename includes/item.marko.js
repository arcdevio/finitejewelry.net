function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa;

  return function render(data, out) {
    out.w('<span ng-init="MC.setProduct(' +
      escapeXmlAttr(data.product) +
      ')"></span><div class="radial-box-light"><h2 class="m-t-64">{{MC.product.title}}</h2><div class="product glass-box" layout="column" layout-align-sm="center center" layout-gt-sm="row" layout-align-gt-sm="left center"><div class="image-box"><div class="wrap"><img ng-class="{activeImage: MC.activeImageIndex == image.index }" ng-src="/static/images{{image.src}}" alt="{{image.alt}}" ng-repeat="image in MC.product.images" ng-cloak></div><div class="backwards" ng-click="MC.setBackwardsImage()"><md-icon class="arrow" md-font-icon="keyboard_arrow_left">&#xE314;</md-icon></div><div class="forwards" ng-click="MC.setForwardsImage()"><md-icon class="arrow" md-font-icon="keyboard_arrow_right">&#xE315;</md-icon></div></div><div layout="row" layout-align="center center" flex layout-padding><div layout="column" layout-align="center center"><p>{{MC.product.description}}</p><p>{{MC.product.price | currency}}</p><a ng-href="{{MC.product.buyLink}}" class="button-gold">Buy Now</a></div></div></div></div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);