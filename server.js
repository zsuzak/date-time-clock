const express = require('express');
const port = process.env.PORT || 3000;

let app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});