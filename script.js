function calculateMinCost() {
  //your code here
  // Get the input value
  var input = document.getElementById("input").value;

  // Split the input by commas and convert the values to numbers
  var ropes = input.split(",").map(Number);

  // Sort the ropes in ascending order
  ropes.sort(function(a, b) {
    return a - b;
  });

  // Initialize the total cost variable
  var totalCost = 0;
	// Iterate through the ropes
  while (ropes.length > 1) {
    // Take the two smallest ropes
    var smallestRope1 = ropes.shift();
    var smallestRope2 = ropes.shift();

    // Calculate the cost of connecting the ropes
    var cost = smallestRope1 + smallestRope2;

    // Add the cost to the total
    totalCost += cost;

    // Insert the connected rope back into the sorted array
    // to maintain the order
    var index = 0;
    while (index < ropes.length && ropes[index] < cost) {
      index++;
    }
    ropes.splice(index, 0, cost);
  }
	// Display the result
  document.getElementById("result").innerHTML = totalCost;
}

  
    
