
const socket = io.connect('http://localhost:3080');

const message = document.getElementById('message-field');
const username = document.getElementById('username').value;
const btn = document.getElementById('sendMessage');
const msgContainer = document.getElementById('message-container');
const usersContainer = document.getElementById('users-container');

btn.addEventListener('click', function() {
    socket.emit('chat', {
        username: username,
        message: message.value,
    });
});

socket.on('update', function(users) {
    usersContainer.innerHTML = '';
    for (const key in users) {
        if (users.hasOwnProperty(key)) {
            usersContainer.innerHTML +=
                '<li class="list-group-item">' + users[key] + '</li>';
        }
    }
});

socket.on('chat', function(data) {
    message.value = '';
    msgContainer.innerHTML +=
        '<div class="row message-bubble"><p class="text-muted">'
        + data.username + '</p><p>' + data.message + '</p></div>';
});

socket.emit('join', username);