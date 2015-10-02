angular.module('app', ['ui.bootstrap', 'chart.js', 'ui.router'])
.directive('stockdetails', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/stock-details.html',
    controller: ['$scope', '$http', function($scope, $http) {
      var mathSwitch = {
        "positiveNegative": function(number) {
          if (number > 0) {
            return "success";
          } else if (number == 0) {
            return "warning";
          } else if (number < 0) {
            return "danger";
          }
        },
        "higherThan": function(array, index) {
          if (array[index] > array[index + 1]) {
            return "success";
          } else if (array[index] > array[index + 1]) {
            return "danger";
          } else {
            return "warning";
          }
        },
        "ascdesc": function(array) {
          var asc = true,
            desc = true;
          for (var i = 1; i < array.length; i++) {
            if (array[i] > array[i - 1]) {
              desc = false;
            } else if (array[i] < array[i - 1]) {
              asc = false;
            }
          }
          if (asc) {
            return "success";
          } else if (desc) {
            return "danger";
          } else {
            return "warning";
          }
        },
        "roe": function(number) {
          if (number >= 10) {
            return "success";
          } else if (5 <= number < 10) {
            return "warning";
          } else if (number < 0) {
            return "danger";
          }
        },
        "ltGrowth": function(number) {
          number = parseFloat(number);
          if (number >= 5) {
            return "success";
          } else if (0 <= number < 5) {
            return "warning";
          } else if (number < 0) {
            return "danger";
          }
        }
      };

      $scope.mathSwitch = mathSwitch;
      var sum = function(array) {
        var num = 0;
        for (var i = 0; i < array.length; i++) {
          num += array[i];
        }
        return num;
      };
      $scope.sum = sum;
      var discountRate = function(betaArray) {
        var beta, discRate;
        beta = _.last(betaArray);
        discRate = (beta * 4.5) + 2.6;
        if (discRate < 5) {
          return 5;
        } else if (discRate > 9) {
          return 9;
        } else {
          return discRate;
        }
      };
      $scope.discountRate = discountRate;
      var lastNum = function(array) {
        return _.last(array);
      };
      $scope.lastNum = lastNum;
      var sumDebt = function(st, lt) {
        if (_.isArray(lt) && _.isArray(st)) {
          return (_.last(lt) + _.last(st));
        } else if (_.isArray(lt)) {
          return (_.last(lt) + st);
        } else if (_.isArray(st)) {
          return (_.last(st) + lt);
        } else if (!!_.isArray(st) == !!_.isArray(lt)) {
          return (st + lt);
        } else {
          return 0;
        }
      };
      $scope.sumDebt = sumDebt;
      var discountArrayFn = function(discRate) {
        var disc = 1 / (1 + discRate / 100);
        var array = [];
        array.push(disc);
        for (var i = 0; i < 9; i++) {
          disc = disc / (1 + discRate / 100);
          array.push(disc);
        }
        return array;
      };
      $scope.discountArrayFn = discountArrayFn;
      var lastNum = function(array) {
        return _.last(array);
      };
      $scope.lastNum = lastNum;
      var sumDebt = function(st, lt) {
        if (_.isArray(lt) && _.isArray(st)) {
          return (_.last(lt) + _.last(st));
        } else if (_.isArray(lt)) {
          return (_.last(lt) + st);
        } else if (_.isArray(st)) {
          return (_.last(st) + lt);
        } else if (!!_.isArray(st) == !!_.isArray(lt)) {
          return (st + lt);
        } else {
          return 0;
        }
      };
      $scope.sumDebt = sumDebt;
      var discountArrayFn = function(discRate) {
        var disc = 1 / (1 + discRate / 100);
        var array = [];
        array.push(disc);
        for (var i = 0; i < 9; i++) {
          disc = disc / (1 + discRate / 100);
          array.push(disc);
        }
        return array;
      };
      // $scope.finalIV = function() {
      //   if (!!reutersFinancial.ltgrowth) {
      //     return ((sum(discountValue(projectedCF(sum(cashflowQ.cf_o), reutersFinancial.ltgrowth[3], 5), discountArrayFn(discountRate(reutersFinancial.beta)))) / reutersOverview.shares_outstanding) - sumDebt(balanceSheetQ.st_borrow, balanceSheetQ.lt_debt) / reutersOverview.shares_outstanding + lastNum(balanceSheetQ.cash_sti) / reutersOverview.shares_outstanding);
      //   }
      // };
      $scope.discountArrayFn = discountArrayFn;
      var projectedCF = function(ocf, stGrowth, ltGrowth) {
        var array = [];
        stGrowth = stGrowth / 100;
        ltGrowth = ltGrowth / 100;
        array.push(ocf);
        for (var i = 0; i < 2; i++) {
          ocf *= (1 + stGrowth);
          array.push(ocf);
        }
        for (var i = 0; i < 7; i++) {
          ocf *= (1 + ltGrowth);
          array.push(ocf);
        }
        return array;
      };
      $scope.projectedCF = projectedCF;
      var discountValue = function(projCF, discFactor) {
        var array = [],
          discValue;
        for (var i = 0; i < 10; i++) {
          discValue = projCF[i] * discFactor[i];
          array.push(discValue);
        }
        return array;
      };
      $scope.discountValue = discountValue;
    }]
  }
});
