function calculateMinCost() {
  // Get the input value
  var input = document.getElementById('input').value;
  
  // Convert the input string to an array of integers
  var arr = input.split(',').map(function(item) {
    return parseInt(item, 10);
  });
  
  // Sort the array in non-decreasing order
  arr.sort(function(a, b) {
    return a - b;
  });
  
  // Variable to store the total cost
  var totalCost = 0;
  
  // Iterate over the array and add the two smallest ropes at each step
  while (arr.length > 1) {
    // Get the two smallest ropes
    var smallest1 = arr.shift();
    var smallest2 = arr.shift();
    
    // Calculate the cost of connecting the ropes
    var cost = smallest1 + smallest2;
    
    // Add the cost to the total cost
    totalCost += cost;
    
    // Add the connected rope to the array
    arr.push(cost);
    
    // Sort the array again
    arr.sort(function(a, b) {
      return a - b;
    });
  }
  
  // Display the minimum cost in the result div
  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML = totalCost;
}


  
    
