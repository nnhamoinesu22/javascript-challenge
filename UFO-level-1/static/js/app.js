// from data.js

var data = data;

var tbody = d3.select("tbody");

//Loop Through `data` and console.log each ufo report object
//Use `Object.entries` to console.log each ufo report value
data.forEach(function(uforeport) {
//console.log(uforeport);
var row = tbody.append("tr");

Object.entries(uforeport).forEach(function([key, value]) {
//console.log(key, value);
var cell = row.append("td");
cell.text(value);
});
});

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

// Select the input element and get the raw HTML node
var inputelement = d3.select("#datetime");

// Get the value property of the input element
var inputvalue = inputelement.property("value");

console.log(inputvalue);
//console.log(data);


  
// Clear table 
tbody.html("");

var filteredData = data.filter(bydate => bydate.datetime === inputvalue);
console.log(filteredData);


filteredData.forEach(function(uforeport) {
    //console.log(uforeport);
    var row = tbody.append("tr");
    
    Object.entries(uforeport).forEach(function([key, value]) {
    //console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    });
    });
});

