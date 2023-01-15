const array = []

for (let i = 1; i <= 500; i++){
    const result = i + (i - 1);
    array.push(result);
}
// document.write(array);

class Deret{
    constructor(deret){
        this.array = deret;
    }

    getArrayIndex(array){
        let arrayIndex = []
        for (let i = 0; i < array.length; i++){
            arrayIndex.push(this.array.indexOf(array[i]))
        }
            return arrayIndex;
    }

    getHighestDeret(){
        return this.array.sort((a,b) => b - a);
    }

    getValueIndex(index){
        return this.array[index];
    }
}

const deret1 = new Deret(array);
// document.write(deret1.getHighestDeret()); //Nomer 1a
// document.write(deret1.getArrayIndex([52, 55, 57, 68, 77])); //Nomer 1b
document.write(deret1.getValueIndex([52])); //Nomer 1c