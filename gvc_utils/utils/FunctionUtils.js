/**
 * Created by gvc1 on 03-09-2014.
 */
var _ = require('lodash');

module.exports = {
    getFunctionParamsAsArray: function () {
        return _.values(arguments)
    }
};
