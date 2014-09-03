/**
 * Created by gvc1 on 10-07-2014.
 */

var _ = require('lodash');
module.exports = {

    removeFirstChar : function (string) {
        return string.substring(1,string.length);
    },

    containsSubString : function (stringValue,subString) {
        return _.isEmpty(stringValue)  ? false : stringValue.indexOf(subString) > -1
    },

    append: function () {
        return _.values(arguments).join(" ");
    }
};
