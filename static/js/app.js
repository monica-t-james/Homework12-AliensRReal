// from data.js
var tableData = data;

// Get a reference to the table and table body
var tbody = d3.select("tbody");

function buildTable(table) {
    table.forEach((sightings) => {
        var row = tbody.append("tr");
        Object.entries(sightings).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}

buildTable(tableData);

// Select the Filter Table button
var submit = d3.select("#filter-btn");
submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Filtered data array
    var filteredData = tableData.filter(tableDatum => tableDatum.datetime === inputValue);

    // Clear table
    tbody.html("");

    if(filteredData === undefined || filteredData.length == 0) {
        d3.select("span").text("No UFO sightings for the date you entered! Try again!").style("font-size", "16px");
    }
    else {
        // Display new table with filtered data
        buildTable(filteredData);
    }
});

// Select the All Dates button
var submit = d3.select("#un-filter-btn");
submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear table
    tbody.html("");
    
    // Rebuild full table
    buildTable(tableData);
})
