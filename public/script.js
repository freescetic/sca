document.addEventListener('DOMContentLoaded', () => {
  const socket = io();

  const messages = document.getElementById('messages');
  const messageInput = document.getElementById('messageInput');
  const sendButton = document.getElementById('sendButton');

  sendButton.addEventListener('click', () => {
      const message = messageInput.value;
      if (message.trim() !== '') {
          // Create a message box element
          const messageBox = document.createElement('div');
          messageBox.className = 'message-box';
          messageBox.textContent = message;

          // Append the message box to the messages container
          messages.appendChild(messageBox);

          // Emit the message to the server
          socket.emit('chat message', message);

          // Clear the input field
          messageInput.value = '';
      }
  });

  socket.on('chat message', (message) => {
      // Create a message box element for received messages
      const messageBox = document.createElement('div');
      messageBox.className = 'message-box';
      messageBox.textContent = message;

      // Append the message box to the messages container
      messages.appendChild(messageBox);
  });
});
