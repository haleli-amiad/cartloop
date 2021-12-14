This project is a simple SPA with React that simulates a text message conversation between two people.
In this case, the "other user" is the server.

Deployment on heroku can be found here: https://cartloop.herokuapp.com/

Features:

1. Ready to send messages are available via macros (by click)
2. Chatting via sockets.io
3. Server response with random answer when sending a message.
4. State is managed via UseContext.
5. Messages are validated against the following characters: aA-zZ1234567890-=.,
6. Design is fully responsive.
8. Design is vanilla, no UI libraries.
8. User gets notified when a message is invalid.
9. Tech stack: React.js, Hooks, Sass, Node.js, Express.

In the project directory, you can run:

npm start => cd client => npm start
the first 'start' command will run the server, and the second will run the client.
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
server will run on 3030.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build 
both in directory file and in client file.
the first one will run the server, and the second will run the client.
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

Server is being served on another repository, you find can it here: https://github.com/haleli-amiad/cartloop-backend

1. Desktop Version
<img src="https://res.cloudinary.com/dksmeovlj/image/upload/v1639425500/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2021-12-13_%D7%91-20.53.11_g2lnrv.png" width="400" />
2. Mobile Version
<img src="https://res.cloudinary.com/dksmeovlj/image/upload/v1639425506/%D7%A6%D7%99%D7%9C%D7%95%D7%9D_%D7%9E%D7%A1%D7%9A_2021-12-13_%D7%91-20.53.24_vnqi1t.png" width="200" height="400" />
