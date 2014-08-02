/**
 * Created by gvc1 on 06-07-2014.
 */
var _ = require('lodash');

module.exports = {

    getColumnNames: function (data) {
        return _.map(data.worksheets[0].data[0], function (it) {
            return _.isUndefined(it) ? "" : it.value;
        });
    },

    getSheet: function (data, sheetName) {
        return _.find(data.worksheets, {"name": sheetName})
    },
    //getBlankValIfUndefinedA:function(){},
    getBlankValueIfUndefined: function (value, propertyName) {
        var returnVal ;
        try {
            if (_.isUndefined(value)) {
                return "";
            }
            returnVal = _.isUndefined(propertyName) ? value : value[propertyName];
        } catch (e) {
            conosole.log(e);
        }
        return  returnVal ;
    }
};