This project is a simple SPA with React that simulates a text message conversation between two people.
In this case, the "other user" is the server.

Functionalities: 
1. Ready to send messages are available via macros (by click)
2. Chatting via sockets.io
3. Server response with random answer when sending a message via 'resolve' button.
4. State is managed via UseContext.
5. Messages are validated against the following characters: aA-zZ1234567890-=.,
6. Design is fully responsive.
7. User gets notified when a message is invalid.
8. Tech stack: React.js, Hooks, Sass, Node.js, Express.


In the project directory, you can run:

npm start / start:dev
Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build / build:prod
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

Server is being served on another repository, you find can it here: ***
