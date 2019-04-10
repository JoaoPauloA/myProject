import Expense from "../entity/expense";

export async function addExpense(){
    let expense = new Expense('pc', '10','23/06');
    console.log(expense);

}

