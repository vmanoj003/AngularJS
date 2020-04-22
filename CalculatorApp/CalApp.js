var CalModule = angular.module("CalModule",[]);
CalModule.controller("CalCtrl1",CalFunc1);
 
0oaa47yxjPtDe4PmA4x6

function CalFunc1(){

    this.resultValue = 0;
    this.buttonClicked = function(button){

        this.selectedOperation = button;
    }

    this.computeResult = function(){
        var number1 = parseInt(this.ip1);
        var number2 = parseInt(this.ip2);

        if(this.selectedOperation === '+'){

            this.resultValue = number1 + number2 ;

        } 
        else if(this.selectedOperation === '-'){

            this.resultValue = number1 - number2 ;

        } 
        else if(this.selectedOperation === '*'){

            this.resultValue = number1 * number2 ;

        }
        else if(this.selectedOperation === '/'){

            this.resultValue = number1 / number2 ;
        }

    }

    
    
          
     

 

}
