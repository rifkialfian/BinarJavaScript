// const ganjil = (n) =>{
//     let nilai = [];
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 !== 0){
//             result.push(i);
//         }
//     }
//     return result;
// };

// document.write(ganjil);

function ganjil(n) {
    let angka = [];

    for(let i = 0; i <= n; i++){
        if(i % 2 !=0){
            angka.push(i)
        }
    }
    return angka;
}

const number = ganjil(200);
document.write(number);