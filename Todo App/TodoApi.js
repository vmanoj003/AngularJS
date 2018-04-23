var myModule = angular.module("myModule",[]);

myModule.controller("TodoCtrl",TodoFunc);

function TodoFunc(){

    this.editMode = false;

    this.list = ["Learn Angular 1","Try out exercises","Learn Angular 2 and advanced Versions"];

    this.delete = function(index){

        this.list.splice(index,number=1);

    }

    this.addTodo = function(){

       // this.newTodo = this.inputTodo;

        this.list.push(this.inputTodo);

        this.inputTodo = '';
    }

    this.triggerEditMode = function(){

        this.editMode = !this.editMode;
    }
}
 

 