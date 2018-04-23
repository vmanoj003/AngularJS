
(function(){
var myModule = angular.module("myModule");
myModule.controller("ContactCtrl",ContactCtrl);


function ContactCtrl(contactDataSvc) {
    var self = this;
    self.editMode = false;
    self.addMode = false;
    contactDataSvc.getContacts().then(function(data){

        self.contacts = data;
    });
     
    this.selectContact = function(index){

        this.selectedContact = this.contacts[index];
        self.successMessage = undefined;
        self.errorMessage = undefined;

    }

    this.toggleMode  = function(){
        this.editMode = !this.editMode;
    }

    this.saveUser = function(){

        this.toggleMode();
        var userData = this.selectedContact;

        if(self.addMode){
            contactDataSvc.createUser(userData).then(function(){

                self.successMessage = " User Updated Succesfully"
            }, function(){
    
                self.errorMessage = "Try Again, something went wrong";
            });

            self.addMode = false;

        }else{

            contactDataSvc.saveUser(userData).then(function(){

                self.successMessage = " User Updated Succesfully"
            }, function(){
    
                self.errorMessage = "Try Again, something went wrong";
            });

        }
        
    }

    this.addUser = function(){

        self.addMode = true;

        this.selectedContact = {

            "id":new Date().toDateString()
        }

        this.editMode = true;

    }
 
}

})();