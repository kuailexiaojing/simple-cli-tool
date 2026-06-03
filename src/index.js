// src/index.js
// Simple CLI tool for demonstration
// This file is intentionally simple to show the project is runnable.

function main() {
  const toolName = process.env.TOOL_NAME || "SimpleCLI";
  console.log(`Welcome to ${toolName}`);
  console.log("This tool provides basic utilities for daily development tasks.");
  console.log("Example: Run 'node src/index.js' to see this message.");
}

main();
