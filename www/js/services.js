angular.module('app.services', [])

.factory('Expenses', function ($firebaseArray, $rootScope) {
    // Might use a resource here that returns a JSON array
  var expenses = $firebaseArray(new Firebase($rootScope.baseUrl).child('expenses'));

  return {
     all: function () {
         return expenses;
     },
     get: function (expenseId) {
         // Simple index lookup
         return expenses.$getRecord(expenseId);
     },
     addExpense: function (expense) {
       expenses.$add(expense).then(function(data) {
         console.log("Expense added");
       })
     },
     delete: function(expenseId){
        console.log("Expense to delete : " + expenseId);
       return expenses.$remove(expenseId);
/*// build the FB endpoint to the item in movies collection
var deleteExpenseRef = ExpensesService.buildEndPoint(expenseToDelete.$id)
console.log(deleteExpenseRef);
var result = deleteExpenseRef.remove();
console.log(result);
//Expenses.delete();*/

     }

  }
})

.service('ExpensesService', [function(){

  return {
     buildEndPoint : function (key) {
        return new Firebase($rootScope.baseUrl + '/' + key);
      }
  }
}])

.factory('BlankFactory', [function(){

}]);
