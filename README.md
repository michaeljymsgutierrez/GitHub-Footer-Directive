# GitHub-Footer-Directive
</br>
What is this?
GitHub-Footer-Directive is a simple footer directive for your IONIC Project that can redirect the user to your Github acount when the footer is clicked!

<br>

# Usage
</br>
1 Clone the repo and copy the "gitCreditFooter.js" in you js directory. </br></br>
2 Include this in your index.html </br>
```<script src="js/gitCreditFooter.js"></script>```</br></br>
3 Inject the module in your app.js 'gitHubCredit.Footer'</br>
```var app = angular.module('myapp',['gitHubCredit.Footer']);```</br></br>
4 Set the USERNAME in app.js
```
.controller('creditFooterController',function($window,$scope){
    
    $scope.gitClick = function(){   
         
        $window.open('https://github.com/< USERNAME>','_self','location=no');
    };
})

```

