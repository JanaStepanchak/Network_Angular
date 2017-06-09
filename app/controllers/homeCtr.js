app.controller("homeCtrl", ["UsersService", function (UsersService) {
    var vm = this;
    vm.users = [];
    vm.init = function () {
        vm.users = UsersService.getUsers();
    }
    vm.init();
    vm.friends = vm.users.friends;
    vm.posrs = [];
    vm.initP = function () {
        vm.posrs = UsersService.getMess();
    }
    vm.initP();
    vm.currentUser = vm.users[idUser];
//    document.getElementById('photoUser').style.backgroundImage = vm.currentUser.photo;
    vm.phurl = vm.currentUser.photo;
    vm.login = "Hi " + vm.currentUser.firstName;
    vm.noFriends = function (friends) {
       
        if (friends.userName == vm.currentUser.userName) {
            return false;
        }
        for (var i in vm.currentUser.friends) {
            if (friends.userName == vm.currentUser.friends[i].userName) {
                return false;
            }
        }
        return true
    }
    vm.changeFriends = function (friends) {
        vm.currentUser.friends.push(friends);
    }
    vm.removeFriends = function (fri) {
        for (var i in vm.currentUser.friends) {
            if (vm.currentUser.friends[i] == fri) {
                vm.currentUser.friends.splice(i, 1);
            }
        }
    }
    vm.addInformation = function () {
        vm.showFormInformation = true;
        vm.changeUser = vm.currentUser;
        vm.SaveInformation = function () {
            vm.currentUser = vm.changeUser;
            vm.showFormInformation = false;
        }
    };
    //*********************************************
    vm.enterMess = function () {
        vm.dat = new Date();
        vm.D = 1900 + vm.dat.getYear() + "-" + (1 + vm.dat.getMonth()) + "-" + vm.dat.getDate() + "  T " + vm.dat.getHours() + ":" + vm.dat.getMinutes() + ":" + vm.dat.getSeconds();
        vm.posrs.push({
            tema: vm.textTema,
            data: vm.D,
            userName: vm.currentUser.userName,
            post: vm.textPost
        });
        vm.textTema = "";
        vm.textPost = "";
    }
    vm.MessUsserFilter = function (pos) {
        for (var i in vm.posrs) {
            if (pos.userName == vm.currentUser.userName) {
                return true;
            } else {
                return false;
            }
        };
    }
    //************************************************** 
    vm.PhotoChange = function () {
        var preview = document.getElementById('photoUser');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();
        //   console.log(reader.result);
        reader.addEventListener("load", function () {
            // preview.style.background = "url(" + reader.result + ")";
//            vm.currentUser.photo = "url(" + reader.result + ")";
            vm.currentUser.photo = reader.result;
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    //  vm.PhotoChange();
    document.getElementById('idChangePhoto').onchange = function () {
        vm.PhotoChange();
setTimeout(function(){   
// document.getElementById('photoUser').style.backgroundImage = vm.currentUser.photo;
    vm.phurl = vm.currentUser.photo;
     document.getElementById('submitPhoto').click();
},50)
        
    }
}])
