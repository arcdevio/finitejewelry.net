var MongoClient = require('mongodb').MongoClient;
var mongodb;
var url;

url = 'mongodb://websiteUser:*1-9websiteUser@107.170.26.246:27017/finitejewelry';

exports.connect = function (callback) {

	MongoClient.connect(url, function(error, db) {
		if (error) throw error;
		mongodb = db;
		callback();
	});

};

exports.db = function () {
	return mongodb;
};
