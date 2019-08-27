const seminar = 'ketiduran';

const janjian = kondisi => new Promise((resolve, reject) => {
    if (kondisi === 'ketiduran') {
        resolve('Saya ketiduran lupa mengikuti seminar');
    } else {
        reject('Saya ingin mengikuti seminar');
    }
})

janjian(seminar)
    .then(res => console.log(res))
    .catch(err => console.error(err));