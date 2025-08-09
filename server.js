const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT = 4000;

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("chat message", (data) => {
    io.emit("chat message", data); // Broadcast to everyone
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

http.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
