angular.module('app.services', [])

.factory('Expenses', function ($firebaseArray, $rootScope) {
    // Might use a resource here that returns a JSON array
  var expenses = $firebaseArray(new Firebase($rootScope.baseUrl));

  return {
     all: function () {
         return expenses;
     },
     allFromUser: function(userId){
        console.log("Retrieve expenses from user "+userId);
        var baseRef = new Firebase($rootScope.baseUrl);
       return $firebaseArray(baseRef.orderByChild("user").equalTo(userId));
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

         var onComplete = function(error) {
          if (error) {
            console.log('Deletion failed');
          } else {
            console.log('Deletion succeeded');
          }
        };

        console.log("Expense to delete : " + expenseId);

        var itemRef = new Firebase($rootScope.baseUrl + "/" + expenseId);

        itemRef.remove(onComplete);

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
