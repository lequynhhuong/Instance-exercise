
**Workflow when making an AngularJS app**

1/ Create a module and use `ng-app` in the view to define the application scope 

2/ Create a controller, and use `ng-controller` in the view 
   
    -to define the controller scope.
    -to group together related data about the product 

in the view

    -use dot notation to display the values. 
    
3/ Add data to `$scope` in the controller so they can be displayed with expressions in the view. 

**Review**

- a `module` contains the different elements of an AngularJS app
- a `controller` manages the app's data
- an `expression` displays values on the page 
- a `filter` formats the value of an expression . 

**Directive used in this exercise**

- ng-app
- ng-controller
- ng-repeat
- ng-scr
- ng-click