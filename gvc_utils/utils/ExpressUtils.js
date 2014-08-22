/**
 * Created by gvc1 on 23-08-2014.
 */

var dirUtils = require("./FileDirUtils.js");

module.exports = {

    //TODO how to get app dir name, assuming app path is provided
    setRoutes: function setRoutes(app,path){
        var fileNames = dirUtils.listFileNames(path);
        if(fileNames){
            fileNames.forEach(function(fileName){
                app.use("/" + fileName,require(path + "/routes/" + fileName));
            })
        }
    }

};
