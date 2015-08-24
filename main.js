angular.module('app', ['ui.bootstrap', 'chart.js'])
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
    $scope.finvizBullOFour = data;
  });
  $http.get('https://api.import.io/store/data/b08fbc17-8964-4aa6-b5d6-20fb39771216/_query?input/webpage/url=http%3A%2F%2Ffinviz.com%2Fscreener.ashx%3Fv%3D111%26f%3Dfa_debteq_u1%2Cfa_eps5years_pos%2Cfa_epsqoq_pos%2Cfa_epsyoy_pos%2Cfa_epsyoy1_pos%2Cfa_estltgrowth_pos%2Cfa_grossmargin_pos%2Cfa_netmargin_pos%2Cfa_opermargin_pos%2Cfa_roa_pos%2Cfa_roe_pos%2Cfa_roi_pos%2Cfa_sales5years_pos%2Cfa_salesqoq_pos%2Cgeo_usa%2Cta_sma200_pa%26ft%3D4%26r%3D81&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a').success(function(data) {
    $scope.finvizBullOFive = data;
  });


  $scope.getData = function(ticker, exchange) {
    //NOTE reuters overview
    $http.get("https://api.import.io/store/data/74d1f024-3c9d-4d4c-8ca4-3229d942452a/_query?input/webpage/url=http%3A%2F%2Fwww.reuters.com%2Ffinance%2Fstocks%2Foverview%3Fsymbol%3D"+ticker+"."+exchange+"&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
      $scope.reutersOverview = data.results[0];
    });
    //NOTE Reuters financial
    $http.get("https://api.import.io/store/data/6fab4b3f-87c9-4777-ab36-2f47a56ff723/_query?input/webpage/url=http%3A%2F%2Fwww.reuters.com%2Ffinance%2Fstocks%2FfinancialHighlights%3Fsymbol%3D"+ticker+"."+exchange+"&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
      $scope.reutersFinancial = data.results[0];
    });
    //NOTE Yahoo
    $http.get("https://api.import.io/store/data/57fa017a-6613-4d75-b1db-88d9b76b76cf/_query?input/webpage/url=https%3A%2F%2Fsg.finance.yahoo.com%2Fq%2Fae%3Fs%3D"+ticker+"&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
      $scope.yahoo = data.results[0];
    });
    //NOTE cashflow quarterly
    $http.get("https://api.import.io/store/data/5624f0bc-efcb-45e2-b9b5-0e9b4fd4982a/_query?input/webpage/url=http%3A%2F%2Fwww.bloomberg.com%2Fresearch%2Fstocks%2Ffinancials%2Ffinancials.asp%3Fticker%3D"+ticker+"%26dataset%3DcashFlow%26period%3DQ%26currency%3Dnative&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
      $scope.cashflowQ = data.results[0];
    });
    $http.get("https://api.import.io/store/data/5624f0bc-efcb-45e2-b9b5-0e9b4fd4982a/_query?input/webpage/url=http%3A%2F%2Fwww.bloomberg.com%2Fresearch%2Fstocks%2Ffinancials%2Ffinancials.asp%3Fticker%3D"+ticker+"%26dataset%3DcashFlow%26period%3DA%26currency%3Dnative&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
      $scope.cashflowA = data.results[0];
    });
    //NOTE balance sheet quarterly
    $http.get("https://api.import.io/store/data/6c478c06-3d81-4e2a-bd82-8787cd07b587/_query?input/webpage/url=http%3A%2F%2Fwww.bloomberg.com%2Fresearch%2Fstocks%2Ffinancials%2Ffinancials.asp%3Fticker%3D"+ticker+"%26dataset%3DbalanceSheet%26period%3DQ%26currency%3Dnative&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
      $scope.balanceSheetQ = data.results[0];
    });
    //NOTE income statement quarterly
    $http.get("https://api.import.io/store/data/7072f2d5-f647-4e78-a4ef-19da8c1d9bfe/_query?input/webpage/url=http%3A%2F%2Fwww.bloomberg.com%2Fresearch%2Fstocks%2Ffinancials%2Ffinancials.asp%3Fticker%3D"+ticker+"%26dataset%3DincomeStatement%26period%3DQ%26currency%3Dnative&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
      $scope.incomeQ = data.results[0];
    });
    //NOTE income statement yearly
    $http.get("https://api.import.io/store/data/18a5f33c-b173-4b0a-9f4d-6356268bf8e4/_query?input/webpage/url=http%3A%2F%2Fwww.bloomberg.com%2Fresearch%2Fstocks%2Ffinancials%2Ffinancials.asp%3Fticker%3D"+ticker+"%26dataset%3DincomeStatement%26period%3DA%26currency%3Dnative&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
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
// $scope.pvOCFperShare = function() {
//   var num = 0;
//   num = sum(discountValue(projectedCF(sum(cashflowQ.cf_o),reutersFinancial.ltgrowth[3],5),discountArrayFn(discountRate(reutersFinancial.beta))))/reutersOverview.shares_outstanding;
//   return num;
// };
$scope.discountRate = function(betaArray) {
  var beta, discRate;
  beta = _.last(betaArray);
  discRate = (beta*4.5)+2.6;
  if (discRate<5) {
    return 5;
  }
  else if (discRate>9) {
    return 9;
  }
  else {
    return discRate;
  }
};
$scope.lastNum = function(array) {
  return _.last(array);
};
$scope.sumDebt = function(st, lt) {
  if (st==0 && lt==0) {
    return 0
  }
  else if (st == 0) {
    return _.last(lt);
  }
  else if (lt==0) {
    return _.last(st);
  }
  else {
    var stDebt, ltDebt, sum;
    stDebt = _.last(st);
    ltDebt = _.last(lt);
    sum = stDebt+ ltDebt;
    return sum;
  }
};
var discountArrayFn = function(discRate) {
  var disc = 1/(1+discRate/100);
  var array = [];
  array.push(disc);
  for (var i = 0; i < 9; i++) {
    disc = disc/(1+discRate/100);
    array.push(disc);
  }
  return array;
};
$scope.discountArrayFn = discountArrayFn;
var projectedCF = function(ocf, stGrowth, ltGrowth) {
    var array = [];
    stGrowth = stGrowth/100;
    ltGrowth = ltGrowth/100;
    array.push(ocf);
    for (var i = 0; i < 2; i++) {
      ocf*=(1+stGrowth);
      array.push(ocf);
    }
    for (var i = 0; i < 7; i++) {
      ocf*=(1+ltGrowth);
      array.push(ocf);
    }
    return array;
};
$scope.projectedCF = projectedCF;
var discountValue = function(projCF, discFactor) {
  var array = [], discValue;
  for (var i = 0; i < 10; i++) {
    discValue = projCF[i]*discFactor[i];
    array.push(discValue);
  }
  return array;
};
$scope.discountValue = discountValue;

})
.filter('percentage', ['$filter', function ($filter) {
  return function (input, decimals) {
    return $filter('number')(input * 100, decimals) + '%';
  };
}]);
