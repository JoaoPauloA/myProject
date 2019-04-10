var name;
var price;
var day;
class Expense{
    constructor(name,price,day){
        this.name = name;
        this.preco = price;
        this.day = day;
    }

    get Name(){
        return this.name;
    }

}



export default Expense;