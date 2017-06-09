app.factory("UsersService", function () {
	return {
		getUsers: function () {
			return Users;
		}
		, addUser: function (user) {
			Users.push(user);
		},
		 getMess: function () {
			return Messdge;
		}
		, addMess: function (mess) {
			Messdge.push(mess);
		},
       
	}
});
var Users = [{
		  firstName: "jjj"
		, lastName: "jjj"
		, userName: "js"
		, password: "11"
		, phoneNamber: "063*******"
		, cantry: "Ua"
		, city: "Lviv"
		, skype: "dd"
		, giltHub: " aaa "
		, description: "*******"
//		, photo: "url(img/111.jpg)"
		, photo: "img/111.jpg"
		, friends: []
}
		, {
		firstName: "Dara"
		, lastName: "ddd"
		, userName: "ddd"
		, password: "12"
		, phoneNamber: "*******0000"
		, cantry: ""
		, city: "hkhkjh"
		, skype: "******"
		, giltHub: "******"
		, description: "******"
//		, photo: "url(img/111.jpg)"
, photo: "img/111.jpg"
            , friends: []
        }
		, {
		firstName: "Vvv"
		, lastName: "vvv"
		, userName: "vvv"
		, password: "13"
		, phoneNamber: ""
		, cantry: "******"
		, city: "******"
		, skype: "******"
		, giltHub: "******"
		, description: "******"
//		, photo: "url(img/111.jpg)"
            , photo: "img/111.jpg"
		, friends: []
        }
        , {
		firstName: "ooo"
		, lastName: "ppp"
		, userName: "qqq"
		, password: "qqq"
		, phoneNamber: ""
		, cantry: ""
		, city: ""
		, skype: ""
		, giltHub: ""
		, description: ""
//		, photo: "url(../img/111.jpg)"
            , photo: "img/111.jpg"
		, friends: []
        }

			]
var Messdge = [
	{
		tema: "Hello"
		, data: "2017-4-25 T 15:28:22"
		, userName: "DR"
		, post: "Hello! My friends"
		}
	]

var idUser;