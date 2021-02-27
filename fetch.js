const fetch = require('node-fetch');

fetch('http://inside.greenzero.us/wp-json/wp/v2/pages?_fields=title&slug=home-page')
    .then(res => res.text())
    .then(text => console.log(text))