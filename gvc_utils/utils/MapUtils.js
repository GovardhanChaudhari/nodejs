/**
 * Created by gvc1 on 08-07-2014.
 */

var objectUtils = require(__dirname + "/ObjectUtils.js");

var _ = require('lodash');

module.exports = {
    mapKeyToIndex: function (array) {
        return _.inject(array, function (keyToIndexMap, value, index) {
            keyToIndexMap[value] = index;
            return keyToIndexMap;
        }, {});
    },

    mapKeyToValue: function (key, value) {
        /*return _.inject(keys,function(keyToValueMap,key){
         keyToValueMap[key] =
         },{});*/
        var obj = {};
        obj[key] = value;
        return obj;
    },


    mapKeysToValues: function (keys, values) {
        return _.inject(keys, function (keysToValuesMap, key, index) {
            keysToValuesMap[key] = values[index];
            return keysToValuesMap;
        }, {})
    },

    updateMap: function (key, value, map, replace) {
        if (_.isUndefined(map[key])) {
            map[key] = value
        } else {
            if (_.isArray(map[key])) {
                if (!_.isUndefined(replace)) {
                    map[key] = value;
                } else {
                    (map[key]).push(value)
                }
            } else if (!_.isObject(map[key])) {
                if (!_.isUndefined(replace)) {
                    var arr = [map[key]];
                    arr.push(value);
                    map[key] = arr;
                }
            } else { /*this is object*/
                if (!_.isUndefined(replace)) {
                    var obj = map[key];
                    obj = objectUtils.mergeObjects(obj, value);
                    map[key] = obj;
                }
            }
        }
        return map;
    }

};