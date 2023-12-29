const fs = require("fs");

// Function to write content to a file
function writeFile(filePath, content) {
  // Write to the file asynchronously
  fs.writeFile(filePath, content, "utf8", (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Write to file successful.");
    }
  });
}

// Provide the path to the file you want to write to
const filePath = "output-file.txt";

// Content to be written to the file
const fileContent = "Hello, this is the content to be written to the file.";

// Call the function to write content to the file
writeFile(filePath, fileContent);
