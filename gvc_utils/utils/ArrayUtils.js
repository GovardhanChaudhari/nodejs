/**
 * Created by gvc1 on 08-07-2014.
 */

var _ = require('lodash');
var stringUtils = require(__dirname + '/StringUtils.js');

module.exports = {

    removeFirst: function (array) {
        return array.splice(1);
    },

    stringValueContains: function (array, subStringValue, returnIndex, callBack) {

        return callBack(_.map(array, function (value, index) {
            if (stringUtils.containsSubString(value, subStringValue)) {
                return returnIndex ? index : subStringValue
            } else {
                return "";
            }

        }));
    }
};
