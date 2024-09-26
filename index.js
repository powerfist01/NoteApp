var express = require('express');
const fetch = require('node-fetch');
var app = express();
const url = 'https://wildcraft.fieldassist.io/Reports/BookingData_New/GetData?retailercode=100005'
function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
            acc[key].push(obj);
        } else {
            var flag = 0;
            for (var i = 0; i < acc[key].length; i++) {
                if (acc[key][i].Option === obj.Option) {
                    var temp = {}
                    temp.size = obj.Size;
                    temp.CurrentQuantity = obj.CurrentQuantity;
                    acc[key][i].allSize.push(temp);
                    flag = 1;
                    break;
                }
            }
            if (!flag) {
                acc[key].push(obj);
            }
        }
        return acc;
    }, {});
}

var groupedData;

function fetchData() {
    fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (json) {
            //console.log(json);
            var data = json.map(function (obj) {
                var temp = {
                    // RetailerCode: obj.RetailerCode,
                    // RetailerName: obj.RetailerName,
                    // ASM: obj.ASM,
                    // Distributor: obj.Distributor,
                    Brand: obj.Brand,
                    Gender: obj.Gender,
                    Category: obj.Category,
                    //SubCategory: obj.SubCategory,
                    // Channel: obj.Channel,
                    // Region: obj.Region,
                    // StyleName: obj.StyleName,
                    Option: obj.Option,
                    // Delivery: obj.Delivery,
                    // Color: obj.Color,
                    // MRP:  obj.MRP,
                    // ERPCode: obj.ERPCode,
                    Quality: obj.Quality,
                    Size: obj.Size,
                    allSize: [],
                    // SizeERPCode: obj.SizeERPCode,
                    //VenueQuantity: obj.VenueQuantity,
                    CurrentQuantity: parseInt(obj.CurrentQuantity),
                    // OrderDate: obj.OrderDate,
                    Image: obj.Image
                };
                return temp;
            })
            console.log(data);
            groupedData = groupBy(data, 'Category');
            //console.log(groupedData);
        });
}

fetchData();
app.get('/', function (req, res) {
    res.send(groupedData);
})

app.listen(3000, function (err) {
    console.log('Running at http://localhost:3000/')
}) 