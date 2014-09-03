/**
 * Created by gvc1 on 18-08-2014.
 */

var dbUtils = require("../DbUtils.js");

module.exports = {

    connect: function (dbName) {
        var mongoose = require('mongoose');
        var dbUrl = dbUtils.getMongooseDbUrl(dbName);
        mongoose.connect(dbUrl);

        var Cat = mongoose.model('Cat', { name: String });

        var kitty = new Cat({ name: 'Zildjian' });
        kitty.save(function (err) {
            if (err) {
                console.log("mongoose save error: " + err );
            }else{
                console.log('meow');
            }
        });
    }

};