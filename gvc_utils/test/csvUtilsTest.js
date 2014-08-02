/**
 * Created by gvc1 on 28-07-2014.
 */

var csvUtils = require('../utils/csvUtils');
csvUtils.generateData('testcsv.csv', function (err,data) {
    //console.log(data);

    //console.log(csvUtils.getColumnNames(data));
    console.log(csvUtils.getRow(data,1));

});