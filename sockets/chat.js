const { io } = require('../index');

// Sockets messages
io.on('connection', client => {
    console.log('CLiente conectado');

    client.on('disconnect', () => {
        console.log('CLiente desconectado');
    });

    client.on('message', (payload) => {

        console.log('Mensaje recibido:', payload);

        // generate random string for id
        const id = Math.random().toString(36).substr(2, 9);
    

        io.emit('message', { message: id });

    });
});
