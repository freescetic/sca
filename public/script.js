document.addEventListener('DOMContentLoaded', () => {
  const socket = io();

  const messages = document.getElementById('messages');
  const messageInput = document.getElementById('messageInput');
  const sendButton = document.getElementById('sendButton');

  sendButton.addEventListener('click', () => {
      const message = messageInput.value;
      if (message.trim() !== '') {
          // Emit the message to the server with a "sent" flag
          socket.emit('chat message', { message, type: 'sent' });

          // Clear the input field
          messageInput.value = '';
      }
  });

  socket.on('chat message', (data) => {
      // Create a message box element based on the message type (sent or received)
      const messageBox = document.createElement('div');
      messageBox.className = `message-box ${data.type}`;
      messageBox.textContent = data.message;

      // Append the message box to the messages container
      messages.appendChild(messageBox);
  });
});
