# Decision Tree Processor

This project provides a Decision Tree Processor that allows you to define and execute business logic in a tree structure format. The processor supports serialization to JSON, deserialization from JSON, and executing decision trees with various actions such as sending emails and SMS based on conditions.

## Table of Contents

- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Using the CLI Command](#using-the-cli-command)
- [Examples](#examples)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine. You also need to install `ts-node` globally or locally within your project to run TypeScript files directly.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/decision-tree-processor.git
   cd decision-tree-processor


2. Install the dependencies
```bash
  npm install

3. Running tests
```bash
  npx jest

4. Using the CLI Command
The CLI command allows you to process a decision tree defined in JSON format. The command is available through ts-node and can be executed as follows:
```bash
  ts-node src/cmd.ts process-tree -t '<JSON_STRING>'