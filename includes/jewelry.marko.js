function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('<div class="radial-box-light"><h2 class="m-t-64">Jewelry</h2><div class="sort-bar m-t-64" layout="row" layout-align="center center" layout-align-gt-xs="end end"><input class="search" type="text" ng-model="MC.sort.search" placeholder="Search"><div class="drop-down"><select ng-model="MC.sort.option"><option ng-repeat="option in MC.sort.options" value="{{option.value}}">{{option.text}}</option></select><md-icon md-font-icon="arrow_drop_down">&#xE5C5;</md-icon></div></div><ul class="list"><li class="items glass-box" dir-paginate="item in MC.items | filter:MC.sort.search | orderBy:MC.sort.option:MC.sort.direction | itemsPerPage: 5" layout="column" layout-align-xs="center center" layout-gt-xs="row" layout-align-gt-xs="left center" layout-padding><div layout="row" layout-align="center center" flexr><img ng-src="/static/images{{item.images[0].src}}" alt="{{item.images[0].alt}}"></div><div layout="row" layout-align="center center" flex layout-padding><div layout="column"><p>{{item.title}}</p><p>{{item.description}}</p><p>{{item.price | currency}}</p><div layout="row" layout-xs="column" layout-sm="column" layout-align="center center"><a ng-href="{{item.buyLink}}" class="button-gold m-l-0">Buy</a><a ng-href="/jewelry/{{item._id}}" class="button-blue m-r-0">View</a></div></div></div></li><li class="items glass-box" ng-show="MC.productsEmptyOrError" layout="row" layout-align="center center" layout-padding>Please Refresh The Page</li></ul><dir-pagination-controls></dir-pagination-controls></div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);