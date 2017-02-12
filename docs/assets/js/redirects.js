var pathname = window.location.pathname;


var jewelryAll = new RegExp('(/jewelry/$)|(/jewelry$)|(/jewelry/all$)|/jewelry/all/$');
var jewelryProdcut = new RegExp('\/jewelry\/.*?');

if (jewelryAll.test(pathname)) {
	window.location = '/jewelry/#/all';
} else if (jewelryProdcut.test(pathname)) {
	window.location = '/jewelry/#/all';
}
