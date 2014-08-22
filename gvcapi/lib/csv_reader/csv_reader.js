var csvUtils = require('gvc_utils').csv;

csvUtils.generateData("testcsv.csv", function (err,data) {
    console.log(data);
});

