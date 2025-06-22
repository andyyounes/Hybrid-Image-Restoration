var app = angular.module('ImageRestoration', ["ui.router"]);


app.config(function($stateProvider, $urlRouterProvider){
    var states = [
        {
            name: "main",
            url: "/",
            templateUrl: "./templates/main.htm"
        },
        {
            name: "home",
            url: "/home",
            templateUrl: "./templates/home.htm"
        },
        {
            name: "login",
            url: "/login",
            templateUrl: "./templates/login.htm"
        },
        {
            name: "register",
            url: "/register",
            templateUrl: "./templates/register.htm"
        },
        {
            name:"subscribe",
            url:"/subscribe",
            templateUrl:"./templates/subscribe.htm"
        },
        {
            name: "contactus",
            url: "/contactus",
            templateUrl: "./templates/contactus.htm"
        },
        {
            name:"aboutus",
            url:"/aboutus",
            templateUrl:"./templates/aboutus.htm"
        },
        {
            name:"restoration",
            url:"/restoration",
            templateUrl:"./templates/restoration.htm"
        }
    ]

    states.forEach((state)=>{
        $stateProvider.state(state.name, state);
    })

    $urlRouterProvider.otherwise('/');
})

app.controller("mainController", function($scope, $rootScope, $window) {
    // Check if the user is logged in (you can customize this logic based on your needs)
    $rootScope.isLoggedIn = $window.localStorage.getItem("loggedIn") === "true";

    $scope.logout = function(){
        $window.localStorage.setItem("loggedIn",false);
        $window.location.reload();
    }
});

app.controller("loginController", function($scope, $location, $rootScope, $window ) { 

    var users = [
        {
            username: "andymaria",
            password: "12345678"
        },
        {
            username: "noubar",
            password: "12345678"
        }
    ];


    $scope.error = "";
    $scope.credentials = {
        username: "",
        password: ""
    };

    $scope.login = function(credentials){

        for (var i = 0; i < users.length; i++) {
            if (users[i].username === credentials.username && users[i].password === credentials.password) {
                $rootScope.isLoggedIn = true;
                $window.localStorage.setItem("loggedIn",true)
                $location.path('/dashboard');
                return;
            }
        }

        $scope.error = "Invalid username or password";
    };
});

app.controller("DeblurController", function($scope,$http ,$location, $rootScope, $window ) { 

    $scope.selectedImage = null;
        $scope.originalImage = '';
        $scope.restoredImage = '';

        $scope.displayImage = function() {
            // console.log("noubarina");
            var input = document.getElementById("imageInput");
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $scope.$apply(function() {
                        $scope.originalImage = e.target.result;
                    });
                };
                reader.readAsDataURL(input.files[0]);
            }
        };

        $scope.chooseImage = function() {
            // No need to post anything, just update the selected image
            // The image will be posted when restoreImage is clicked
            return false; // Prevent form submission
        };

        $scope.restoreImage = function() {
            var imageData = $scope.originalImage.split(',')[1]; // Remove the data URL prefix
            var requestData = { image: imageData };
            $http.post('http://localhost:5000/deblur', requestData
            )
            .then(function(response) {
                $scope.restoredImage = "data:image/jpeg;base64,"+response.data.deblurred_image;                ;

            })
            .catch(function(error) {
                console.error('Error:', error);
            });
        };
});

