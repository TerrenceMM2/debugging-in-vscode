# Debugging Sample #2 - Express

A Express web server with a few `GET` and `POST` endpoints to test debugging API routes.

## Requirements

-   [Visual Studio Code](https://code.visualstudio.com/download)
-   [Node.js](https://nodejs.org/en/download/)
-   [Postman](https://www.postman.com/downloads/), [Insomnia](https://insomnia.rest/download), or other API testing tool.

## Setup

-   In a terminal, run `npm i` to install dependencies.
-   Open API testing tool and set URL to `http://localhost:3000/`
-   A `.vscode/launch.json` configuration file is provided.

## Instructions

1. Open `02-debugging-node` in VS Code.
2. Open `app.js` in VS Code's editor panel.
3. Set breakpoints to view VS Codes debugging capabilities
4. Select the "Run and Debug" View from the left-hand tool bar.
5. Click the "Run and Debug" button.
6. Using an API testing tool, hit one of the endpoint specified in the `app.js` file
7. Use the Debug toolbar to control the debugger actions.
