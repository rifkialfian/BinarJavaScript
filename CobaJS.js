// function ganjil(n) {
//     let angka = [];

//     for(let i = 0; i <= n; i++){
//         if(i % 2 !=0){
//             angka.push(i)
//         }
//     }
//     return angka;
// }


// function gaji(n){
//     let rank = "";

//     if ((n >= 6) && (n<=12)){
//         rank = "Junior Programmer"
//     } else if ((n >= 12) && (n<=20)){
//         rank = "Mid Programmer"
//     } else if ((n >= 20) && (n<=35)){
//         rank = "Senior Programmer"
//     } else if ((n >= 35) && (n<=50)){
//         rank = "Lead Programmer"
//     }

//     return rank;
// }

// const number = ganjil(200);
// document.write(number);
// document.write(gaji(30));


const angkaDeret = (a, b) => {
    let angka = [];

    for (let i = a; i <= b; i++) {
        let pushNum = 1 + (i *(i - 1)) / 2;
        angka.push(pushNum);  
    }
    return angka;
}

document.write(angkaDeret(1, 3), ' No 1', "<br>");
document.write(angkaDeret(1, 5), ' No 2', "<br>");
document.write(angkaDeret(222, 232), ' No 3', "<br>");