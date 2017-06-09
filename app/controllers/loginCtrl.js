app.controller("loginCtrl", ["UsersService", function (UsersService) {
		var vm = this;
		vm.users = [];
		vm.init = function () {
			vm.users = UsersService.getUsers();
		}
		vm.init();
		vm.Login = function () {
			for (var i in vm.users) {
if (vm.users[i].userName == vm.userName && vm.users[i].password == vm.password) {					idUser = i;
                    localStorage.setItem(idUser, JSON.stringify(idUser));
					vm.myVar = "#/home";
					break;
				}
			}
			vm.userName = "";
			vm.password = "";
		}
}
	])