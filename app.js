angular.module('app', ['ui.bootstrap', 'chart.js', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');
      $stateProvider
          // HOME STATES AND NESTED VIEWS ========================================
          .state('home', {
              url: '/home',
              templateUrl: 'partials/home.html'
          })
          .state('screener', {
              url: '/screener',
              templateUrl: 'partials/screener.html'
          });
  })
  .factory('_', function() {
    return window._;
  })
  .controller('WATenController', function($scope, $http) {
    $http.get('https://api.import.io/store/data/b08fbc17-8964-4aa6-b5d6-20fb39771216/_query?input/webpage/url=http%3A%2F%2Ffinviz.com%2Fscreener.ashx%3Fv%3D111%26f%3Dfa_debteq_u1%2Cfa_eps5years_pos%2Cfa_epsqoq_pos%2Cfa_epsyoy_pos%2Cfa_epsyoy1_pos%2Cfa_estltgrowth_pos%2Cfa_grossmargin_pos%2Cfa_netmargin_pos%2Cfa_opermargin_pos%2Cfa_roa_pos%2Cfa_roe_pos%2Cfa_roi_pos%2Cfa_sales5years_pos%2Cfa_salesqoq_pos%2Cgeo_usa%2Cta_sma200_pa%26ft%3D4&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a').success(function(data) {
      $scope.finvizBullOne = data;
    });
    $http.get('https://api.import.io/store/data/b08fbc17-8964-4aa6-b5d6-20fb39771216/_query?input/webpage/url=http%3A%2F%2Ffinviz.com%2Fscreener.ashx%3Fv%3D111%26f%3Dfa_debteq_u1%2Cfa_eps5years_pos%2Cfa_epsqoq_pos%2Cfa_epsyoy_pos%2Cfa_epsyoy1_pos%2Cfa_estltgrowth_pos%2Cfa_grossmargin_pos%2Cfa_netmargin_pos%2Cfa_opermargin_pos%2Cfa_roa_pos%2Cfa_roe_pos%2Cfa_roi_pos%2Cfa_sales5years_pos%2Cfa_salesqoq_pos%2Cgeo_usa%2Cta_sma200_pa%26ft%3D4%26r%3D21&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a').success(function(data) {
      $scope.finvizBullTwo = data;
    });
    $http.get('https://api.import.io/store/data/b08fbc17-8964-4aa6-b5d6-20fb39771216/_query?input/webpage/url=http%3A%2F%2Ffinviz.com%2Fscreener.ashx%3Fv%3D111%26f%3Dfa_debteq_u1%2Cfa_eps5years_pos%2Cfa_epsqoq_pos%2Cfa_epsyoy_pos%2Cfa_epsyoy1_pos%2Cfa_estltgrowth_pos%2Cfa_grossmargin_pos%2Cfa_netmargin_pos%2Cfa_opermargin_pos%2Cfa_roa_pos%2Cfa_roe_pos%2Cfa_roi_pos%2Cfa_sales5years_pos%2Cfa_salesqoq_pos%2Cgeo_usa%2Cta_sma200_pa%26ft%3D4%26r%3D41&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a').success(function(data) {
      $scope.finvizBullThree = data;
    });
    $http.get('https://api.import.io/store/data/b08fbc17-8964-4aa6-b5d6-20fb39771216/_query?input/webpage/url=http%3A%2F%2Ffinviz.com%2Fscreener.ashx%3Fv%3D111%26f%3Dfa_debteq_u1%2Cfa_eps5years_pos%2Cfa_epsqoq_pos%2Cfa_epsyoy_pos%2Cfa_epsyoy1_pos%2Cfa_estltgrowth_pos%2Cfa_grossmargin_pos%2Cfa_netmargin_pos%2Cfa_opermargin_pos%2Cfa_roa_pos%2Cfa_roe_pos%2Cfa_roi_pos%2Cfa_sales5years_pos%2Cfa_salesqoq_pos%2Cgeo_usa%2Cta_sma200_pa%26ft%3D4%26r%3D61&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a').success(function(data) {
      $scope.finvizBullFour = data;
    });
    $http.get('https://api.import.io/store/data/b08fbc17-8964-4aa6-b5d6-20fb39771216/_query?input/webpage/url=http%3A%2F%2Ffinviz.com%2Fscreener.ashx%3Fv%3D111%26f%3Dfa_debteq_u1%2Cfa_eps5years_pos%2Cfa_epsqoq_pos%2Cfa_epsyoy_pos%2Cfa_epsyoy1_pos%2Cfa_estltgrowth_pos%2Cfa_grossmargin_pos%2Cfa_netmargin_pos%2Cfa_opermargin_pos%2Cfa_roa_pos%2Cfa_roe_pos%2Cfa_roi_pos%2Cfa_sales5years_pos%2Cfa_salesqoq_pos%2Cgeo_usa%2Cta_sma200_pa%26ft%3D4%26r%3D81&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a').success(function(data) {
      $scope.finvizBullFive = data;
    });
    $http.get('https://api.import.io/store/data/b08fbc17-8964-4aa6-b5d6-20fb39771216/_query?input/webpage/url=http%3A%2F%2Ffinviz.com%2Fscreener.ashx%3Fv%3D111%26f%3Dfa_eps5years_neg%2Cfa_epsqoq_neg%2Cfa_sales5years_neg%2Cfa_salesqoq_neg%2Cgeo_usa%2Cta_sma200_pb%26ft%3D4&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a').success(function(data) {
      $scope.finvizBear = data;
    });
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
          }
          else if (array[i] < array[i-1]) {
            asc = false;
          }
        }
        if (asc) {
          return "success";
        }
        else if (desc) {
          return "danger";
        }
        else {
          return "warning";
        }
      }
    };

    $scope.mathSwitch = mathSwitch;
    $scope.getExchange = function(ticker) {
      $http.get("https://api.import.io/store/data/41761159-261d-4429-9146-f18eb22a5a0d/_query?input/webpage/url=http%3A%2F%2Fwww.bloomberg.com%2Fresearch%2Fstocks%2Fsnapshot%2Fsnapshot.asp%3Fticker%3D" + ticker + "&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
        $scope.exchangeSymbol = data.results[0];
        $scope.exchange = $scope.exchangeSwitch($scope.exchangeSymbol.exchange);
        $scope.getData($scope.ticker, $scope.exchange);
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
      });
      $http.get("https://api.import.io/store/data/5624f0bc-efcb-45e2-b9b5-0e9b4fd4982a/_query?input/webpage/url=http%3A%2F%2Fwww.bloomberg.com%2Fresearch%2Fstocks%2Ffinancials%2Ffinancials.asp%3Fticker%3D" + ticker + "%26dataset%3DcashFlow%26period%3DA%26currency%3Dnative&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
        $scope.cashflowA = data.results[0];
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
      });


    };
    $scope.showFinVizBull = false;
    $scope.ticker = "FB";
    $scope.exchange = "O";
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
    var exchangeSwitch = function(exchange) {
      if (exchange == ("NASDAQ GS" || "Consolidated Issue Listed on NASDAQ Global Select")) {
        return "O";
      } else if (exchange == ("New York Consolidated" || "New York")) {
        return "N";
      } else {
        return "N";
      }
    };
    $scope.exchangeSwitch = exchangeSwitch;
    var lastNum = function(array) {
      return _.last(array);
    };
    $scope.lastNum = lastNum;
    var sumDebt = function(st, lt) {
      if ((!st || st == 0) && (lt == 0 || !lt)) {
        return 0
      } else if (!st || st == 0) {
        return _.last(lt);
      } else if (!lt || lt == 0) {
        return _.last(st);
      } else {
        var stDebt, ltDebt, sum;
        stDebt = _.last(st);
        ltDebt = _.last(lt);
        sum = stDebt + ltDebt;
        return sum;
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

  })
  .filter('percentage', ['$filter', function($filter) {
    return function(input, decimals) {
      return $filter('number')(input * 100, decimals) + '%';
    };
  }]);
