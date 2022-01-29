const http = require("http");
const cors = require("cors");
const app = require("./app");
const PORT = process.env.PORT || 8000;
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
