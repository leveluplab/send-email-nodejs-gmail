const express = require('express');
const { emailController } = require('./email.js');
const app = express();
const port = 3000;
app.get('/email', emailController);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})