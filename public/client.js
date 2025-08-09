const socket = io();

const form = document.getElementById("form");
const messageInput = document.getElementById("message");
const usernameInput = document.getElementById("username");
const messages = document.getElementById("messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const message = messageInput.value.trim();
  const username = usernameInput.value.trim();

  if (message && username) {
    socket.emit("chat message", {
      username,
      message
    });

    messageInput.value = "";
  }
});

socket.on("chat message", (data) => {
  const item = document.createElement("div");
  item.innerHTML = `<strong>${data.username}</strong>: ${data.message}`;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
});
