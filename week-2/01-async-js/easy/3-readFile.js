const fs = require("fs");

// Function to read the file and print its contents
function readFileAndPrint(filePath) {
  // Read the file asynchronously
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
    } else {
      console.log("File Contents:", data);

      // Perform an increasingly expensive operation
      performExpensiveOperation(1, () => {
        console.log("Expensive operation completed.");
      });
    }
  });
}

// Function simulating an expensive operation
function performExpensiveOperation(iterations, callback) {
  if (iterations <= 0) {
    callback();
  } else {
    // Simulate an expensive operation (e.g., a loop)
    for (let i = 0; i < 1e7; i++) {
      // This loop is intentionally kept simple; you can make it more complex
      // to observe the impact on output as the iterations increase.
    }

    // Call the next iteration of the expensive operation
    setTimeout(() => {
      performExpensiveOperation(iterations - 1, callback);
    }, 0);
  }
}

// Provide the path to the file you want to read
const filePath = "3-readFile.txt";

// Call the function to read the file and print its contents
readFileAndPrint(filePath);
