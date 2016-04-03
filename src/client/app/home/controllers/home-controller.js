/** Created by Aquariuslt on 2016-03-25.*/
'use strict';
var articleService = require('../services/article-service')();



module.exports = function homeController($log,$interval){
  var vm = this;

  vm.atomList = [
    "http://blog.aquariuslt.com/atom",
    "http://debug.aquariuslt.com/atom",
    "http://game.aquariuslt.com/atom"
  ];
  vm.articleSummaryList = [];
  vm.tagLinkPrefix = '#/tag/';
  vm.indeterminateValue = 0;
  vm.showProgressBar = false;
  init();







  function init(){
    loadArticleSummaryList();
  }

  function loadArticleSummaryList(){
    startInterval();
    articleService.loadArticleSummaryList(vm.atomList,function(error,summaryList){
      vm.articleSummaryList = summaryList;
      $log.info('load articleSummaryList complete. count of articleSummary:',vm.articleSummaryList.length);
      $log.info('articleSummary schema example:',vm.articleSummaryList);
      stopInterval();
    });
  }

  function updateProgressBar(){
    if(vm.showProgressBar){
      vm.indeterminateValue += 1;
      if (vm.indeterminateValue > 100) {
        vm.indeterminateValue = 0;
      }
    }
  }


  function startInterval(){
    vm.showProgressBar = true;
    $interval(updateProgressBar, 100, 0, true);
  }

  function stopInterval(){
    vm.showProgressBar = false;
    $interval.cancel(updateProgressBar);
  }
};