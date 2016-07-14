angular.module('app.controllers', [])

.controller('myExpensesCtrl', function($rootScope, $scope, $ionicModal, Expenses, ExpensesService) {

  $rootScope.show("Please wait... Processing");
  $scope.expenses = Expenses.all();

  $rootScope.hide();

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('templates/newExpense.html', function(modal) {
    $scope.expenseModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });


  // Called when the form is submitted
    $scope.createExpense = function(expense){

      var newExpense = {
        user: "Annabelle",
        amount: expense.amount,
        label: expense.label
      };

      Expenses.addExpense(newExpense);

      $scope.expenseModal.hide();
      expense.label = "";
      expense.amount = "";
    };

    $scope.deleteExpense = function(expenseToDelete){



       var response = confirm("Are certain about removing \"" + expenseToDelete.label + "\" from the list?");
       if (response == true) {

         $rootScope.show("Please wait... Deleting from List");

         var itemRef = new Firebase($rootScope.baseUrl + expenseToDelete.$id);

      /*   Expenses.child(key).remove(function(error) {
               if (error) {
                 $rootScope.hide();
                 $rootScope.notify('Oops! something went wrong. Try again later');
               } else {
                 $rootScope.hide();
                 $rootScope.notify('Successfully deleted');
               }
             }

*/

        }


    };




    $scope.newExpense = function() {
      $scope.expenseModal.show();
    };
    $scope.closeNewExpense = function() {
      $scope.expenseModal.hide();
    };

})

.controller('accountingCtrl', function($scope) {

})

.controller('myProfileCtrl', function($scope) {

})
