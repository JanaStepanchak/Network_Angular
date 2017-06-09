//app.directive("myDirective", function(){
//    return{
//        template: "<h1> My directive</h1>"
//    }
//})


app.directive("myDirective", ["UsersService",function(UsersService){
    return{
        templateUrl: "app/templates/my-directives.html",
        restrict: "AEMC", //якими шляхами його відображати
        //атрибутб темплейс
        //елемент
        //меседж  коментар
        //клас
        scope:{
            object: "="
            
        },
        
        link: function(scope,element,attrs,controller){
            scope.name = "My directive in scope";
//            element.css({
//                color:"red",
//            })
//            element.text("New text");
            
            scope.add = function(){
                UsersService.adduser(scope.newUser);

                }
//            console.log(attrs);
//            console.log(attrs.name);
//            console.log(element);
             console.log(scope.object);
            
            
        }
    }
}])