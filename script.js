// Add a click event listener to the "Generate Graph" button
document.getElementById("generateGraph").addEventListener("click", function () {
    // Get the user input for x and y values
    var xInput = document.getElementById("xValues").value;
    var yInput = document.getElementById("yValues").value;

    // Split the CSV input into arrays and convert them to numbers
    var xValues = xInput.split(",").map(function (value) {
        return parseFloat(value);
    });

    var yValues = yInput.split(",").map(function (value) {
        return parseFloat(value);
    });

    // Create an SVG container for the graph
    var width = 400;
    var height = 300;

    var svg = d3.select("#graphContainer")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // Define the scales for x and y axes
    var xScale = d3.scaleLinear()
        .domain([0, d3.max(xValues)])
        .range([0, width]);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(yValues)])
        .range([height, 0]);

    // Define the line function
    var line = d3.line()
        .x(function (d, i) { return xScale(xValues[i]); }) // Map x values to x-coordinates
        .y(function (d, i) { return yScale(yValues[i]); }); // Map y values to y-coordinates

    // Draw the line graph using the path element
    svg.append("path")
        .data([xValues, yValues]) // Bind data to the path
        .attr("class", "line") // Apply a CSS class for styling
        .attr("d", line); // Generate the path data for the line
});