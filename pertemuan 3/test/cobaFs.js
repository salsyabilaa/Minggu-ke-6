//proses pemanggilan library fs
const fs = require('fs')

console.log('start reading a file...')

//proses readfile text.text menggunakan fs
fs.readFile('text.txt', 'utf-8', (err, content) => {
    //untuk handle error
    if (err){
        console.log('error happend during reading the file')
        return console.log(err)
    }

    //lakukan sesuatu disini kalau berhasil

    console.log("yeay, berhasil datanya gengs: " + content);
})

console.log('end of the file')