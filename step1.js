function cat(path) {
    const fs = require('fs');
    const process = require('process');


    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.log('Error', err);
            process.exit(1);
        } else {
            console.log(data);
        }
    });
}

cat(process.argv[2]);