const express = require('express');
const app = express();
const routes = require('./routes');
const config = require('./config');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes);

const PORT = config.port || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});