const http = require("http");
const app = require("./app");
const cookieParser = require('cookie-parser');

// Use PORT from .env file or default to 3000
const port = process.env.PORT || 3000;

const server = http.createServer(app);

// Start the server
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
