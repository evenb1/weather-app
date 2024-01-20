/*
const car = {
    name: 'prado',
    make: 'toyota',
    year: 2010,
    getPrice: function(){
        return 5000;
    },
    printDescription: function(){
        console.log(this.make +' '+this.year);
    }
}

car.printDescription();
console.log(car.make);
*/
function first(){
    return this;
}
console.log(first())