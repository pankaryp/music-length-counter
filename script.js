/**
 * Music Length Counter
 * by Panos Karyp
 * MIT License
 */

const fs = require('fs');
const mp3Duration = require('mp3-duration');

const dir = './test/'; // testing folder

fs.readdir(dir, (err, files) => {

    let total=0; // total length

    if (err) {
        return console.log(err.message);
    }

    console.log("Number of files: " + files.length);

    for (let file of files) {

        mp3Duration(dir + file, (err, duration) => {

            if (err) {
                return console.log(err.message);
            }

            total=total+duration; // sum up lengths

            console.log(file + ' is ' + duration + ' seconds long');
            console.log("The total length is: " + total);
        });
        
    }

});