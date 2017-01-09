// console.log("Playlists Ctrl loaded"); // Feedback
angular.module('playlistsCtrl', ['ridesService', 'ngCordovaOauth', 'oauth.uber'])

.controller('PlaylistsCtrl', function($scope, testVariable, testFunction,$http, $ionicPopup, retrieveSchedule, timeEstimate, $cordovaOauth, Camera) {
    
     $scope.names = true;
    $scope.changeName = function(){
        $scope.names=!$scope.names;
    }
    
	$scope.banana = function(){
	$cordovaOauth.uber("xUDkon_2x6pBtISsx1dj0C-O-TSRrbRR", ["profile"]).then(function(result) {
    console.log("Response Object -> " + JSON.stringify(result));
}, function(error) {
    console.log("Error -> " + error)
});
	}


  console.log(testFunction(5));
  console.log(testVariable);
 
	$scope.playlists = retrieveSchedule;



      // Fare estimate
      $scope.apple = function() {
        baseurl = "https://sandbox-api.uber.com/v1/estimates/price"

        parameters = {
          'server_token': 'ikGvlAJSejPSY6bUp7APhxkwyu5ermguZnreUaCd',
          'start_latitude': lat,
          'start_longitude': long,
          'end_latitude': end_lat,
          'end_longitude': end_long,
        }

        url = baseurl + "?" + "server_token=" + parameters['server_token'] + "&start_latitude=" + parameters[
            'start_latitude'] + "&start_longitude=" + parameters['start_longitude']+"&end_latitude=" + parameters[
            'end_latitude'] + "&end_longitude=" + parameters['end_longitude']
        $http.get(url).success(function(data){
          console.log(data)
        })
      }

    	$scope.strawberry = function(){
    		console.log("HELLO I AM HERE FIND ME HELLO");
    		 var url = "https://uberschedulerp.appspot.com/_ah/api/uberApi/v1/ride/return";
      var userID = "sam"

    		$http.post(url, {
        "userID":userID
      }).then(function (resps) {
        console.log(resps)
    		//console.log(resps.data.rides.length);
    			for(var i = 0; i < resps.data.rides.length; i++){
    				console.log(i);

    				//console.log(dropLat.toString())
    				$scope.playlists.push({
    								 time: resps.data.rides[i].time,
            					id: i,
            					date: resps.data.rides[i].date,
            					repeating: false,
            					repeatedDays: resps.data.rides[i].daysOfWeek,
            					image: 'img/Golden.jpg',
            				dropoff: 'Golden Gate Bridge, San Francisco, CA (' + resps.data.rides[i].dropLat + ',' + resps.data.rides[i].dropLong + ')',
            					pickup: 'Menlo School, Atherton, CA 94027 (' + resps.data.rides[i].pickLat + ',' + resps.data.rides[i].pickLong + ')'
    								})
    			}

    			$scope.$broadcast('scroll.refreshComplete');
      })
    }
        
        $scope.photo = function(){
    
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        // allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        // targetWidth: 100,
        // targetHeight: 200,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
        // correctOrientation:true
      };
//      $cordovaCamera.getPicture(options).then(function(imageData) {
//        console.log(imageData)
//        // var image = document.getElementById('myImage');
//        // image.src = "data:image/jpeg;base64," + imageData;
//        $rootScope.loading = true
//        $rootScope.status = "Processing picture";
//        // alert(imageData)
//        $rootScope.image = imageData
//        myFunctions.toText(imageData, serverCom.newNote)
//        return imageData
//
//      }, function(err) {
//        // error
//      })
      
    }
        
        $scope.photoNumber = 1;
        
        $scope.takePicture = function (options) {
	
      var options = {
         quality : 75,
         targetWidth: 200,
         targetHeight: 200,
         sourceType: 1
      };

      Camera.getPicture(options).then(function(imageData) {
         $scope.picture = imageData;;
      }, function(err) {
         console.log(err);
      });
		
   };
     $scope.getPicture = function (options) {
	
      var options = {
         quality : 75,
         targetWidth: 200,
         targetHeight: 200,
         sourceType: 0
      };

      Camera.getPicture(options).then(function(imageData) {
         $scope.picture = imageData;
          $scope.photoNumber++
      }, function(err) {
         console.log(err);
      });
   };  
})
