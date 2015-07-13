var myModule = angular.module("MyModule", []);
myModule.directive("hello", function() {
    return {
    	/*A:attribute-属性 E：element--元素 M：comment-注释 C：class-样式类*/
        restrict: 'AEMC',
        template: '<div>Hi everyone!</div>',
        replace: true
    }
});