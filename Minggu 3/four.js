// let no_phone = "022 542232323"
// no_phone = no_phone.replaceAll(' ', '-');

// const url = "hthththththththhthththththt";
// const temp = url.substring(6, 23); //start index, end index


// const url_kecil = url.toLowerCase();
// const url_besar = url.toUpperCase();

// // document.write(no_phone);
// document.write(temp + "<br />")
// document.write("Lowercase : " + url_kecil + "<br />");
// document.write("Uppercase : " + url_besar + "<br />");

// const data = [5, 6, 8, 3, 2];
// data.sort();
// document.write(data + "<br />");


// const rows = [
//     {
//         id: 1,
//         name: "Sabrina",
//         age: 36
//     },
//     {
//         id:2,
//         name: "Andika",
//         age:29
//     },
//     {
//         id:3,
//         name:"Rizki",
//         age:28
//     }
// ]

// rows.sort((a,b) => a.age - b.age);
// document.write(JSON.stringify(rows) + '<br>');

class Cars {
    constructor(listMobil, tahun){
        this.carList = listMobil;
        this.year = tahun;
    }
     getCarByIndex(name){
        return this.carList.indexDf(name);
     } 

     isCarByIndex(name){
        return this.carList.includes(name);
     }

     printAllCars(){
        return JSON.stringify(this.carList);
     }
}

