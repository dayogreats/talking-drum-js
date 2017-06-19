const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyPaser = require('body-parser');

let app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'drums')));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    fs.readdir('./drums', (err, files) => {
        let result = files.filter((file) => file.endsWith(".wav"));
        res.render('index', { files: result, keys: [90, 88, 67, 86, 66, 78, 77, 32] });
    });
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});