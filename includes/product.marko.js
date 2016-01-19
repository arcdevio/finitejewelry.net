function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXmlAttr = __helpers.xa;

  return function render(data, out) {
    out.w('<span ng-init="MC.setProduct(' +
      escapeXmlAttr(data.product) +
      ')"></span><div class="radial-box-light"><h2 class="m-t-64">{{MC.product.title}}</h2><div class="product glass-box" layout="column" layout-align-sm="center center" layout-gt-sm="row" layout-align-gt-sm="left center"><div class="image-box"><div class="wrap" layout="column" layout-align="center center"><img ng-class="{activeImage: MC.activeImageIndex == image.index }" ng-src="/static/images{{image.src}}" alt="{{image.alt}}" ng-repeat="image in MC.product.images" ng-cloak></div><div ng-show="MC.isMoreThanOneImage" class="backwards" ng-click="MC.setBackwardImage()"><object class="arrow" data="/static/images/icons/keyboard-arrow-left.svg" type="image/svg+xml">&#xE314;</object></div><div ng-show="MC.isMoreThanOneImage" class="forwards" ng-click="MC.setForwardImage()"><object class="arrow" data="/static/images/icons/keyboard-arrow-right.svg" type="image/svg+xml">&#xE314;</object></div></div><div layout="row" layout-align="center center" layout-padding><div class="ie-fixes" layout="column" layout-align="center center"><p>{{MC.product.description}}</p><p class="product-price">{{MC.product.price | currency}}</p><a ng-href="{{MC.product.buyLink}}" class="button-gold">Buy Now</a></div></div></div></div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);