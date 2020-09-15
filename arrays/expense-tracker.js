const account = {
    name: 'Matt York',
    expenses: [],
    addExpense : function (name, value) {
        this.expenses.push({name: name, value: value})
    },
    printAllExpenses : function () {
        this.expenses.forEach(console.log(item))
    }
    getAccountSummary : function () {
        //

        return 500
    }
}

// Expense -> Description Amount
// addExpense -> Description Amount
// getAccountSummary -> Total up all expenses -> User x has £x in expenses



account.addExpense('Rent', 950)
account.addExpense('Coffee', 9)
console.log(account.getAccountSummary())
