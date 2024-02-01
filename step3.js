
const fs = require('fs');
const process = require('process');
const axios = require('axios');


function cat(path) {

    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.log('Error', err);
            process.exit(1);
        } else {
            console.log(data);
        }
    });
}

async function webcat(url) {
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
    } catch (err) {
        console.log('Error', err);
        process.exit(1);
    }
}


function output(data, out) {
    if (out) {
        fs.writeFile(out, data, 'utf8', function (err) {
            if (err) {
                console.log('Error', err);
                process.exit(1);
            }
        });
    } else {
        console.log(data);
    }
}

let path;
let out;

if (process.argv[2] === '--out') {
    out = process.argv[3];
    path = process.argv[4];
}
else {
    path = process.argv[2];
}

if (path.slice(0, 4) === 'http') {
    webcat(path);
} else {
    cat(path);
}