function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('<div class="radial-box-light"><h1 class="m-t-64">Jewelry</h1><div class="sort-bar m-t-64" layout="row"><select class="drop-down" ng-model="IC.sort.option"><option ng-repeat="option in IC.sort.options" value="{{option.value}}">{{option.text}}</option></select></div><ul class="list"><li class="item glass-box" ng-repeat="item in IC.items | orderBy:IC.sort.option:IC.sort.direction " layout="column" layout-align-xs="center center" layout-gt-xs="row" layout-align-gt-xs="left center" layout-padding><img src alt><div layout="row" layout-align="center center" flex layout-padding><div layout="column"><p>{{item.title}}</p><p>{{item.description}}</p><p>{{item.price | currency}}</p></div></div></li></ul></div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);