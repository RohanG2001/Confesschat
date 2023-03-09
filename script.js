const signUpForm = document.querySelector('#sign-up form');
const usernameInput = document.querySelector('#username');
const chatDiv = document.querySelector('#chat');
const chatWindow = chatDiv.querySelector('.chat-window');
const messageForm = chatDiv.querySelector('.message-form');
const messageInput = messageForm.querySelector('input');

let username = '';

signUpForm.addEventListener('submit', (event) => {
  event.preventDefault();
  username = usernameInput.value.trim();
  if (username !== '') {
    chatDiv.style.display = 'block';
    signUpForm.style.display = 'none';
  }
});

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = messageInput.value.trim();
  if (message !== '') {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `
      <p class="username">${username}:</p>
      <p class="text">${message}</p>
    `;
    chatWindow.appendChild(div);
    messageInput.value = '';
  }
});
