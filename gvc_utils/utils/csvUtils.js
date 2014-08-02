/**
 * Created by gvc1 on 07-07-2014.
 */

var cv2json = require("convert-json");

module.exports = {

    getColumnNames: function (data) {
        return data[0];
    },

    generateData: function (filePath, callBack) {
        cv2json.csv(filePath, null/* optional */, function (err, result) {
            return callBack(err, result);
        });
    },

    getRow: function (data, rowNumber) {
        return data[rowNumber];
    }

};
