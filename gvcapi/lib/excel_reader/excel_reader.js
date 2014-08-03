//var excelUtils =  require("../../utils/excel_utils.js");
var excelUtils =  require("gvc_utils").excel;
var xlsx = require('node-xlsx');
var _ = require('lodash');

function ExcelReader(filePath){

    ExcelReader.prototype.generateColumnMap = function generateColumnMap(){
        return  _.inject(this.getColumnNames(), function (result,columnName,index) {
            result[columnName] = index;
            return result;
        },{});

    };

    ExcelReader.prototype.getSheet = function(sheetName){
        return excelUtils.getSheet(this.data,sheetName);
    };

    ExcelReader.prototype.getColumnNames = function(){
        return excelUtils.getColumnNames(this.data);
    };

    ExcelReader.prototype.getValue = function (rowNumber, columnName) {
        return this.records[rowNumber][(this.columnMap[columnName])].value;
    };

    ExcelReader.prototype.getFirstSheetRecords = function () {
        return this.records != null ? this.records : this.getDefaultExcelSheet().data.splice(1);
    };

    ExcelReader.prototype.getDefaultExcelSheet = function () {
        return this.data.worksheets[0]
    };

    ExcelReader.prototype.forEach = function (myFunc) {
        var parent = this;
        _.map(this.records,(function (e) {
            return myFunc(parent.generateRow(e));
        }));
    };

    ExcelReader.prototype.generateRow = function (array) {
        var parent = this;
        var excelUtilsA = excelUtils ;


        _.each(_.keys(excelUtilsA) , function(x) {
                console.log(JSON.stringify(x)) ;
        }) ;
        //excelUtilsA.getBlankValueIfUndefinedA() ;

        return _.inject(this.getColumnNames(),function (row,columnName) {
            var val = array[parent.columnMap[columnName]];
            row[columnName] = excelUtilsA.getBlankValueIfUndefined(val,"value");
            return row;
        },{});

    };

    ExcelReader.prototype.newInstance = function(filePath){
        return new ExcelReader(filePath);
    };

    ExcelReader.prototype.getRow = function (rowNumber) {
        return  this.generateRow(this.records[rowNumber]);
    };

    ExcelReader.prototype.getAllRows = function () {
        var parent = this;
        return  _.inject(this.getFirstSheetRecords(), function (result,columnName,index) {
            result.push(parent.getRow(index));
            return result;
        },[]);
    };

    ExcelReader.prototype.getAllColumnValues = function(columnName){
        var parent = this;
        return _.inject(this.getAllRows(), function (columnValues,row) {
            columnValues.push(excelUtils.getBlankValueIfUndefined(row[columnName]));
            return columnValues;
        },[]);
    };

    this.data = xlsx.parse(filePath);
    this.columnMap = this.generateColumnMap();
    this.records = this.getFirstSheetRecords();
}

module.exports.ExcelReader = ExcelReader;
var reader = new ExcelReader('products.xlsx');
//var reader = new ExcelReader('excel_reader/products.xlsx');
//console.log(reader.getDefaultExcelSheet());
/*console.log(reader.getValue(0,"name"));
console.log(reader.getValue(4,"name"));*/
//console.log(reader.getSheet("Sheet1"));
//console.log(reader.getColumnNames());
//console.log(reader.getGenerateColumnMap());
//console.log(reader.getFirstSheetRecords());
console.log(reader.getAllRows());
/*reader.forEach(function (e) {
    console.log(e);
});*/

//console.log(reader.getRow(1));

//console.log(reader.getValue(0,"purchase_price"));
