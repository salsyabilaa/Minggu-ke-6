const hewan = ['singa', 'ular,', 'panda'], tambahan  =
['buaya', 'beruang', { obj: 'rusa'}]
const arrayPushHewan = async () =>{
    await tambahan.pop();
    await tambahan.map(res => hewan.push(res))
    console.log(hewan);
}

arrayPushHewan();
/*NOTE:
Array pop adalah fungsi array untuk menghapus index/element terakhir dari sebuah array*/ 