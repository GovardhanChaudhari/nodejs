/**
 * Created by gvc1 on 23-08-2014.
 */

var fs = require('fs');

module.exports = {

    listFileNames : function listFileNames(path){
        if(fs.existsSync(path) && fs.statSync(path).isDirectory()){
            return fs.readdirSync(path);
        }else{
            return false;
        }
    }

};