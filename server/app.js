const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/jar/:jar_id', (req, res) => {
    console.log(req.params.jar_id + ' called!');
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
})
app.get('/', (req, res) => {
    console.log('hello world!');
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;