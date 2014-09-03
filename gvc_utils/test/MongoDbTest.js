/**
 * Created by gvc1 on 18-08-2014.
 */

var mongoDb = require("../utils/db/MongoDb.js");
var mongoose = require("../utils/db/odm/MongooseOdm.js");

mongoDb.connect("moneymag");

//mongoose.connect("moneymag");