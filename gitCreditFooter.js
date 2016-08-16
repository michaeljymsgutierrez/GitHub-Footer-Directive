angular.module('gitHubCredit.Footer',[])

.controller('creditFooterController',function($window,$scope){
    
    $scope.gitClick = function(){   
         
        $window.open('https://github.com/< USERNAME>','_self','location=no');
    };
})

.directive('creditFooter',function(){
    return {
        template: '<div class="bar bar-footer bar-dark" ng-controller="creditFooterController"><div style="font-size:10px;" class="title">All Rights Reserved <span ng-click="gitClick()"> <i class ="ion-social-github"></i> <span>https://github.com/michaeljymsgutierrez</span></span> </div>  </div>'
    }

})
