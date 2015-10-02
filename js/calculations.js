angular.module('app', ['ui.bootstrap', 'chart.js', 'ui.router'])
.directive('calculations', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/calc-app.html',
    controller: ['$scope', '$http', function($scope, $http) {
      var rewardToRisk = function(target, current, stopLoss) {
        if (!(parseFloat(target) + parseFloat(current) + parseFloat(stopLoss))) {
          return ("Input numbers only.");
        } else {
          return ((parseFloat(target) - parseFloat(current)) / (parseFloat(current) - parseFloat(stopLoss)) + " : 1");
        }
      };

      var positionSizing = function(capital, riskTrade, riskShare) {
        if (!(parseFloat(capital) + parseFloat(riskTrade) + parseFloat(riskShare))) {
          return ("Input numbers only.");
        } else {
          return ((parseFloat(capital) * parseFloat(riskTrade / 100)) / parseFloat(riskShare));
        }
      };
      //revealing module pattern
      $scope.rewardToRisk = rewardToRisk;
      $scope.positionSizing = positionSizing;

    }]
  }
});
