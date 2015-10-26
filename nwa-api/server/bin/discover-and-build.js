var path = require('path');
var fs = require('fs');
var app = require(path.resolve(__dirname,'../server'));
var modelConfigPath = path.resolve(__dirname,'../model-config.json');

var modelConfig = require(modelConfigPath);

var tables = [
'categories',
'customercustomerdemo',
'customerdemographics',
'customers',
'employees',
'employeeterritories',
'order_details',
'orders',
'products',
'region',
'shippers',
'suppliers',
'territories'
];



//var dataSource = app.dataSources.NorthWind;

tables.forEach(function(t){

/*
dataSource.discoverSchema(t,{schema:'public'},
    function(err,schema){
      if(err) throw err;
    var model = schema.name;

    var fileName =path.join(__dirname,'../../common/models/',model);
    fs.writeFile(fileName+'.json',JSON.stringify(schema,null,2),function(err,data){
      if(err) throw err;

    fs.writeFile(fileName+'.js','module.exports = function('+model+'){}',function(err){
      if(err) throw err;
         })


    });

    });
})
    dataSource.disconnect();
    */

      modelConfig[t] = {

        dataSource:'NorthWind',
        public:true
      };



})
    fs.writeFile(modelConfigPath,JSON.stringify(modelConfig,null,2),function(err){
      if(err) throw err;
    })


