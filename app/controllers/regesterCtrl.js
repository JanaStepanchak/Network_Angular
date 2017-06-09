app.controller("regesterCtrl", ["UsersService", function (UsersService) {
	var vm = this;
	vm.users = [];
	vm.init = function () {
		vm.users = UsersService.getUsers();
	}
	vm.init();
//	console.log(UsersService.getUsers());
	vm.addRegUser = function () {
		for (var i in vm.users) {
			if (vm.users[i].userName == vm.userName) {
				vm.userName = undefined;
				break;
			}
		}
		if (vm.firstName == undefined || vm.lastName == undefined || vm.userName == undefined || vm.password == undefined) {
//			console.log(UsersService.getUsers());
		}
		else {
			var newUser = {};
			newUser.firstName = vm.firstName;
			newUser.lastName = vm.lastName;
			newUser.userName = vm.userName;
			newUser.password = vm.password;
			newUser.phoneNamber = "";
			newUser.cantry = "";
			newUser.city = "";
			newUser.skype = "";
			newUser.giltHub = "";
			newUser.description = "";
			newUser.backg= "url(111.jpg)";
			newUser.friends = [];
			console.log(newUser);
			vm.users.push(newUser);
			UsersService.addUser = newUser;
			console.log(UsersService.getUsers());
			vm.myVar = "#/";
		}
	}
}])