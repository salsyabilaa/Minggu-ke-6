//pemanggilan library axios
const axios = require('axios');

//URL api
const url = 'https://rickandmortapi.com/api/character';

//Action GET METHOOD
axios.get(url).then(res => {
    //jika success akan tertampil disini
    console.log(res);
}).catch(err => {
    //jika success akan tertampil disini
    console.log(err);
})