/**
 * Created by gvc1 on 18-08-2014.
 */

module.exports = {

    getMongoDbUrl: function (dbName) {
        return "mongodb://localhost:27017/" + dbName;
    },

    getMongooseDbUrl : function (dbName) {
        return 'mongodb://localhost/' + dbName;
    }

};
