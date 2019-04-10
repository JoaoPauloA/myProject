import { addExpense } from '../services/expenseService';

export async function save(){
    await addExpense();

}

