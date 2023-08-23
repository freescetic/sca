// public/script.js
document.addEventListener('DOMContentLoaded', () => {
    const socket = io();
  
    const messages = document.getElementById('messages');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
  
    sendButton.addEventListener('click', () => {
      const message = messageInput.value;
      if (message.trim() !== '') {
        socket.emit('chat message', message);
        messageInput.value = '';
      }
    });
  
    socket.on('chat message', (message) => {
      const li = document.createElement('li');
      li.textContent = message;
      messages.appendChild(li);
    });
  });
  