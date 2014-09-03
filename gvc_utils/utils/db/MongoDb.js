/**
 * Created by gvc1 on 18-08-2014.
 */

var dbUtils = require("./DbUtils.js");

module.exports = {

    connect: function(dbName){
        // Retrieve
        var MongoClient = require('mongodb').MongoClient;

        // Connect to the db
        var dbUrl = dbUtils.getMongoDbUrl(dbName);

        MongoClient.connect(dbUrl, function(err, db) {
            if(err) {
                console.log("Failed to connect " + dbUrl + "");
            }else{
                console.log("We are connected to " + dbUrl);
            }
        });
    }

};