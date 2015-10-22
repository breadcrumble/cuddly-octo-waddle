angular.module('app', ['ui.bootstrap', 'chart.js', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html'
      })
      .state('technical', {
        url: '/technical',
        templateUrl: 'partials/technical.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'partials/about.html'
      })
      .state('bounce', {
        url: '/bounce',
        templateUrl: 'partials/bounce.html'
      })
      .state('epg', {
        url: '/epg',
        templateUrl: 'partials/epg.html'
      })
      .state('calculator', {
        url: '/calculator',
        templateUrl: 'partials/calculator.html'
      })
      .state('shorting', {
        url: '/shorting',
        templateUrl: 'partials/shorting.html'
      })
      .state('ver2', {
        url: '/wa6v2',
        templateUrl: 'partials/wa6steps.html'
      })
      .state('calendar', {
        url: '/calendar',
        templateUrl: 'partials/calendar.html'
      });
  })
  .factory('_', function() {
    return window._;
  })
  .controller('WATenController', function($scope, $http, _) {

    //copy of mathswitch data
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

    //NOTE end copy
    $scope.dataOne = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    $scope.labels = ['Y1', 'Y2', 'Y3'];
    $scope.series = ['Sales', 'Net Income', 'Cashflow'];


    //calendar
    $scope.bullBearToggle = "bull";

    $scope.wa6Steps;
    $scope.toggleWASixSteps = function() {
      $scope.wa6Steps = !$scope.wa6Steps;
    };

    $scope.verTwoFn = {};
    $scope.verTwoResults = {};

    $scope.verTwoFn.getExchange = function(ticker) {

      $scope.verTwoResults = {};
      $scope.dataOne = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];
      $http.get("https://api.import.io/store/data/9a47319f-e2d2-46bb-8286-387fedefa516/_query?input/webpage/url=https%3A%2F%2Ffinance.yahoo.com%2Fq%2Fis%3Fs%3D" + ticker + "%2BIncome%2BStatement%26annual&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a")
        .success(function(data) {
          $scope.verTwoResults.incomeStatement = data.results[0];

          $scope.verTwoFn.getData(ticker, exchangeSwitchTwo($scope.verTwoResults.incomeStatement.exchange));
          //$scope.getData(ticker, exchangeSwitch($scope.exchangeSymbol.exchange));
          $scope.dataOne.splice(0, 1, invertArray($scope.verTwoResults.incomeStatement.revenue));
          $scope.dataOne.splice(1, 1, invertArray($scope.verTwoResults.incomeStatement.net_income));
        });
      $http.get("https://api.import.io/store/data/c9d468c4-33b4-430c-a7cb-4665a7ebbd44/_query?input/webpage/url=https%3A%2F%2Ffinance.yahoo.com%2Fq%2Fbs%3Fs%3D" + ticker + "&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a")
        .success(function(data) {
          $scope.verTwoResults.balanceSheet = data.results[0];
        });
      $http.get("https://api.import.io/store/data/516dd766-cf25-4fcf-a517-a5c4e464f774/_query?input/webpage/url=https%3A%2F%2Ffinance.yahoo.com%2Fq%2Fcf%3Fs%3D" + ticker + "%2BCash%2BFlow%26annual&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a")
        .success(function(data) {
          $scope.verTwoResults.cashflow = data.results[0];
          $scope.dataOne.splice(2, 1, invertArray($scope.verTwoResults.cashflow.ocf));
        });



    };

    $scope.verTwoFn.getData = function(ticker, exchange) {
      //TODO

      // reuters overview
      $http.get("https://api.import.io/store/data/74d1f024-3c9d-4d4c-8ca4-3229d942452a/_query?input/webpage/url=http%3A%2F%2Fwww.reuters.com%2Ffinance%2Fstocks%2Foverview%3Fsymbol%3D" + ticker + "." + exchange + "&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
        $scope.verTwoResults.reutersOverview = data.results[0];
      });
      // Reuters financial
      $http.get("https://api.import.io/store/data/6fab4b3f-87c9-4777-ab36-2f47a56ff723/_query?input/webpage/url=http%3A%2F%2Fwww.reuters.com%2Ffinance%2Fstocks%2FfinancialHighlights%3Fsymbol%3D" + ticker + "." + exchange + "&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
        $scope.verTwoResults.reutersFinancial = data.results[0];
      });
      // Yahoo
      $http.get("https://api.import.io/store/data/24281222-34d8-4656-9924-fec56ada3384/_query?input/webpage/url=http%3A%2F%2Ffinance.yahoo.com%2Fq%2Fae%3Fs%3D" + ticker + "%2BAnalyst%2BEstimates&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
        $scope.verTwoResults.yahooFinance = data.results[0];
      });
    };

    var invertArray = function(array) {
      return array.reverse();
    };
    var exchangeSwitchTwo = function(exchange) {
      var xSymbol = exchange.substr(1),
        tickerSymbol;
      switch (xSymbol) {
        case "NasdaqGS":
          tickerSymbol = "O";
          break;
        case "NYSE":
          tickerSymbol = "N";
          break;
        default:
          tickerSymbol = "";
      }
      return tickerSymbol;
    };
    $scope.exchangeSwitchTwo = exchangeSwitchTwo;
    //fundamental analysis
    $scope.getExchange = function(ticker) {
      $scope.reutersOverview = {};
      $scope.reutersFinancial = {};
      $scope.yahooFinance = {};
      $scope.cashflowQ = {};
      $scope.cashflowA = {};
      $scope.balanceSheetQ = {};
      $scope.incomeQ = {};
      $scope.incomeA = {};
      $scope.dataOne = {
        "annual": [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        "quarterly": [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ]

      };
      $http.get("https://api.import.io/store/data/41761159-261d-4429-9146-f18eb22a5a0d/_query?input/webpage/url=http%3A%2F%2Fwww.bloomberg.com%2Fresearch%2Fstocks%2Fsnapshot%2Fsnapshot.asp%3Fticker%3D" + ticker + "&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
        $scope.exchangeSymbol = data.results[0];
        $scope.getData(ticker, exchangeSwitch($scope.exchangeSymbol.exchange));
      });
    };
    $scope.getData = function(ticker, exchange) {
      // reuters overview
      $http.get("https://api.import.io/store/data/74d1f024-3c9d-4d4c-8ca4-3229d942452a/_query?input/webpage/url=http%3A%2F%2Fwww.reuters.com%2Ffinance%2Fstocks%2Foverview%3Fsymbol%3D" + ticker + "." + exchange + "&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
        $scope.reutersOverview = data.results[0];
      });
      // Reuters financial
      $http.get("https://api.import.io/store/data/6fab4b3f-87c9-4777-ab36-2f47a56ff723/_query?input/webpage/url=http%3A%2F%2Fwww.reuters.com%2Ffinance%2Fstocks%2FfinancialHighlights%3Fsymbol%3D" + ticker + "." + exchange + "&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
        $scope.reutersFinancial = data.results[0];
      });
      // Yahoo
      $http.get("https://api.import.io/store/data/24281222-34d8-4656-9924-fec56ada3384/_query?input/webpage/url=http%3A%2F%2Ffinance.yahoo.com%2Fq%2Fae%3Fs%3D" + ticker + "%2BAnalyst%2BEstimates&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
        $scope.yahooFinance = data.results[0];
      });
      // cashflow quarterly
      $http.get("https://api.import.io/store/data/5624f0bc-efcb-45e2-b9b5-0e9b4fd4982a/_query?input/webpage/url=http%3A%2F%2Fwww.bloomberg.com%2Fresearch%2Fstocks%2Ffinancials%2Ffinancials.asp%3Fticker%3D" + ticker + "%26dataset%3DcashFlow%26period%3DQ%26currency%3Dnative&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
        $scope.cashflowQ = data.results[0];
        $scope.dataOne["quarterly"].splice(0, 1, $scope.cashflowQ.cf_o);
      });
      $http.get("https://api.import.io/store/data/5624f0bc-efcb-45e2-b9b5-0e9b4fd4982a/_query?input/webpage/url=http%3A%2F%2Fwww.bloomberg.com%2Fresearch%2Fstocks%2Ffinancials%2Ffinancials.asp%3Fticker%3D" + ticker + "%26dataset%3DcashFlow%26period%3DA%26currency%3Dnative&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
        $scope.cashflowA = data.results[0];
        $scope.dataOne["annual"].splice(2, 1, $scope.cashflowA.cf_o);
      });
      // balance sheet quarterly
      $http.get("https://api.import.io/store/data/6c478c06-3d81-4e2a-bd82-8787cd07b587/_query?input/webpage/url=http%3A%2F%2Fwww.bloomberg.com%2Fresearch%2Fstocks%2Ffinancials%2Ffinancials.asp%3Fticker%3D" + ticker + "%26dataset%3DbalanceSheet%26period%3DQ%26currency%3Dnative&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
        $scope.balanceSheetQ = data.results[0];
      });
      // income statement quarterly
      $http.get("https://api.import.io/store/data/7072f2d5-f647-4e78-a4ef-19da8c1d9bfe/_query?input/webpage/url=http%3A%2F%2Fwww.bloomberg.com%2Fresearch%2Fstocks%2Ffinancials%2Ffinancials.asp%3Fticker%3D" + ticker + "%26dataset%3DincomeStatement%26period%3DQ%26currency%3Dnative&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
        $scope.incomeQ = data.results[0];
      });
      // income statement yearly
      $http.get("https://api.import.io/store/data/18a5f33c-b173-4b0a-9f4d-6356268bf8e4/_query?input/webpage/url=http%3A%2F%2Fwww.bloomberg.com%2Fresearch%2Fstocks%2Ffinancials%2Ffinancials.asp%3Fticker%3D" + ticker + "%26dataset%3DincomeStatement%26period%3DA%26currency%3Dnative&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
        $scope.incomeA = data.results[0];
        $scope.dataOne["annual"].splice(0, 1, $scope.incomeA.revenues);
        $scope.dataOne["annual"].splice(1, 1, $scope.incomeA.net_income);
      });


    };
    // $scope.ticker = "FB";
    //$scope.exchange = "O";

    var exchangeSwitch = function(exchange) {
      if (exchange == ("NASDAQ GS" || "Consolidated Issue Listed on NASDAQ Global Select")) {
        return "O";
      } else if (exchange == ("New York Consolidated" || "New York")) {
        return "N";
      } else {
        return "O";
      }
    };
    $scope.exchangeSwitch = exchangeSwitch;

    //NOTE earnings release calendar
    $scope.getEarningsDates = function(dateString) {
      if (0 < parseFloat(dateString.end) - parseFloat(dateString.start) < 6) {
        for (var i = parseFloat(dateString.start); i <= parseFloat(dateString.end); i++) {
          var calendar = [];
          $scope.calendarData = [];
          $http.get("https://api.import.io/store/data/21c5ef17-bb28-475a-9707-ba03fdd5fc2c/_query?input/webpage/url=http%3A%2F%2Fbiz.yahoo.com%2Fresearch%2Fearncal%2F" + i + ".html&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
            var temp = data.results;
            temp.splice(0, 2);
            calendar.push(temp);
            // $scope.calendarData = calendar[0];
            $scope.calendarData = _.flatten(calendar);
          });
        }


      }

    };
    //
    // $scope.getEarningsDates = function(dateString) {
    //   // if (0< dateString.end - dateString.start < 6) {
    //   //   var array = [];
    //   //   for (var date = dateString.start; date < dateString.end; date++) {
    //   //     array.push();
    //   //   }
    //   // }
    //   $scope.date = dateString.start;
    //     $scope.calendarData;
    //   $http.get("https://api.import.io/store/data/21c5ef17-bb28-475a-9707-ba03fdd5fc2c/_query?input/webpage/url=http%3A%2F%2Fbiz.yahoo.com%2Fresearch%2Fearncal%2F" + date + ".html&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
    //     var temp = data.results;
    //     temp.splice(0, 2);
    //     $scope.calendarData = temp;
    //   });
    // };


    var weekday = ["Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    var convertStringToDate = function(string) {
      // var string = str.toString();
      // if (string.length == 6) {
      var pattern = /(\d{4})(\d{2})(\d{2})/;
      var date = new Date(string.replace(pattern, '$1-$2-$3'));
      return weekday[date.getDay()];
      // }

    };

    $scope.convertStringToDate = convertStringToDate;





  })
  .filter('percentage', ['$filter', function($filter) {
    return function(input, decimals) {
      return $filter('number')(input * 100, decimals) + '%';
    };
  }]).directive('calculations', function() {
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

        var calculateProfitTarget = function(currentPrice, stopLoss, rtrRatio) {
          if (!(parseFloat(currentPrice) + parseFloat(stopLoss) + parseFloat(rtrRatio))) {
            return ("Input numbers only.");
          } else {
            return ((parseFloat(currentPrice) - parseFloat(stopLoss)) * parseFloat(rtrRatio) + parseFloat(currentPrice));
          }
        };

        $scope.longOrShort = function(currentPrice, movingAverage) {
          if (!(parseFloat(currentPrice) + parseFloat(movingAverage))) {
            return ("Input numbers only.");
          } else if (parseFloat(currentPrice) > parseFloat(movingAverage)) {
            return "bull";
          } else if (parseFloat(currentPrice) < parseFloat(movingAverage)) {
            return "bear";
          } else {
            return "error";
          }
        };


$scope.calculateStopLoss = function(currentPrice, movingAverage, atr) {
  var stopLossPoint, riskPerShare;
  if (!(parseFloat(currentPrice) + parseFloat(movingAverage) + parseFloat(atr))) {
    return ("Input numbers only.");
  }
//BULL condition
  else if (parseFloat(currentPrice) > parseFloat(movingAverage)) {
stopLossPoint = parseFloat(movingAverage) - parseFloat(atr);
riskPerShare = parseFloat(currentPrice) - stopLossPoint;
var array = [stopLossPoint, riskPerShare];
    return array;
  } else if (parseFloat(currentPrice) < parseFloat(movingAverage)) {
    stopLossPoint = parseFloat(movingAverage) + parseFloat(atr);
    riskPerShare = stopLossPoint - parseFloat(currentPrice);
    var array = [stopLossPoint, riskPerShare];
        return array;
    
  } else {
    return "error";
  }
};


        // var calculateRiskPerTrade = function(currentPrice, stopLoss) {
        //   if (!(parseFloat(currentPrice) + parseFloat(stopLoss))) {
        //     return ("Input numbers only.");
        //   } else {
        //     return ((parseFloat(currentPrice) - parseFloat(stopLoss))/parseFloat(currentPrice)*100);
        //   }
        // };
        //revealing module pattern
        $scope.rewardToRisk = rewardToRisk;
        $scope.positionSizing = positionSizing;
        $scope.calculateProfitTarget = calculateProfitTarget;
        // $scope.calculateRiskPerTrade = calculateRiskPerTrade;

      }]
    }
  })
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
        // $scope.finalIV = function() {
        //   if (!!reutersFinancial.ltgrowth) {
        //     return ((sum(discountValue(projectedCF(sum(cashflowQ.cf_o), reutersFinancial.ltgrowth[3], 5), discountArrayFn(discountRate(reutersFinancial.beta)))) / reutersOverview.shares_outstanding) - sumDebt(balanceSheetQ.st_borrow, balanceSheetQ.lt_debt) / reutersOverview.shares_outstanding + lastNum(balanceSheetQ.cash_sti) / reutersOverview.shares_outstanding);
        //   }
        // };
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
