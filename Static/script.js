var tbody = d3.select("tbody");
console.log(data);

data.forEach(function (ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]){
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});


var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

// filter data with date that the user inputs
function clickSelect(){
    //don't refresh 
    d3.event.preventDefault();
    //print the value that was input
    console.log(dateInputText.property("value"));
    //create a new table showing only the filterd data
    var new_table = data.filter(ufoReport => ufoReport.datetime===dateInputText.property("value"))
    //display the new table
    ufoReport(new_table);
}

// event listener to handle change and click
dateInputText.on("change", clickSelect)
