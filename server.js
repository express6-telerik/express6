const async = () => {
    return Promise.resolve();
};

const config = require('./config');
const socket = require('socket.io');

async()
    .then(() => require('./db').init(config.connectionString))
    .then((db) => require('./data').init(db))
    .then((data) => require('./app').init(data))
    .then((app) => {
       const server = app.listen(config.port, () =>
             console.log(`Listen port: ${config.port}`));
        const io = socket(server);
        io.on('connection', (websocket) => {
            console.log('connection: ', websocket.id);
            websocket.on('msg', (msg) => {
                console.log('received msg: ', msg);
            });
        });
    })
    .catch((err) => {
        console.log(err);
    });
