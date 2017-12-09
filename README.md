# GitHub-Footer-Directive

What is this?
GitHub-Footer-Directive is a simple footer directive for your IONIC Project that can redirect the user to your Github acount when the footer is clicked!
# Usage

1 Clone the repo and copy the "gitCreditFooter.js" in you js directory. </br></br>
2 Include this in your index.html </br>
```html
  <script src="js/gitCreditFooter.js"></script>
```

3 Inject the module in your app.js 'gitHubCredit.Footer'</br>
```javascript 
var app = angular.module('myapp',['gitHubCredit.Footer']);
```
4 Set the Github USERNAME in app.js </br>
```javascript 

$window.open('https://github.com/< USERNAME>','_self','location=no');
```
5 Finally use this code in your template or wherever you want the footer to appear

```html
<credit-Footer></credit-Footer>
```
