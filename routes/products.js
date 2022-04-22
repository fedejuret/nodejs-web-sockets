const { Router } = require('express');

const app = Router();
const { io } = require('../index');

app.delete('/api/v1/content/:id', async (req, res) => {

    const { id } = req.params;

    io.emit('delete', {
        message: 'Content ' + id + ' deleted'
    });

    return res.status(200).send({
        message: 'Content ' + id + ' deleted',
        code: 200
    });

});

module.exports = app;