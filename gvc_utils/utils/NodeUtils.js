/**
 * Created by gvc1 on 03-08-2014.
 */

var exec = require('./CmdExec.js');

var arrayUtils = require('./ArrayUtils.js');

var fs = require("fs");
//var _ = require("lodash");

var readOptions = {
    encoding:"utf8"
};


module.exports = {
    createModuleLinks : function (projectPath) {
        // here data var contains string data
        var data = fs.readFileSync(projectPath + "/package.json",readOptions);

        console.log(JSON.parse(data).dependencies);
        console.log(Object.keys(JSON.parse(data).dependencies));

        var moduleNames = Object.keys(JSON.parse(data).dependencies);

        moduleNames =  arrayUtils.remove(moduleNames,"gvc_utils");

        /*if(_.contains(moduleNames,"gvc_utils")){

        }*/

        moduleNames.forEach(function (moduleName) {
            exec.execute("npm link " + moduleName);
        })


    }
};