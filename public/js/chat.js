window.onload = function() {
    const messages = [];
    const socket = io.connect('http://localhost:3700');
    const field = document.getElementById('field');
    const sendButton = document.getElementById('send');
    const content = document.getElementById('content');

    socket.on('message', function(data) {
        if (data.message) {
            messages.push(data.message);
            let html = '';
            for (let i=0; i<messages.length; i++) {
                html += messages[i] + '<br />';
            }
            content.innerHTML = html;
        } else {
            console.log('There is a problem:', data);
        }
    });

    sendButton.onclick = function() {
        const text = field.value;
        socket.emit('send', { message: text });
    };
};
